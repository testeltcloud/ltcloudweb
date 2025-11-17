import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Link } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleContainerClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  }, []);

  const getRelatedItems = useCallback((itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  }, [timelineData]);

  const toggleItem = useCallback((id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach((key) => {
        const numKey = parseInt(key);
        if (numKey !== id) {
          newState[numKey] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  }, [getRelatedItems]);

  // Otimização: usar requestAnimationFrame com throttle melhorado
  useEffect(() => {
    if (!autoRotate) return;

    const animate = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;

      // Throttle ajustado - 60ms para suavidade em mobile
      if (deltaTime >= 60) {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.25) % 360;
          return Number(newAngle.toFixed(2));
        });
        lastTimeRef.current = currentTime;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lastTimeRef.current = 0;
    };
  }, [autoRotate]);

  const calculateNodePosition = useCallback((index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    // Raio responsivo: menor em mobile
    const radius = isMobile ? 120 : 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, angle, zIndex, opacity };
  }, [rotationAngle, isMobile]);

  const isRelatedToActive = useCallback((itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  }, [activeNodeId, getRelatedItems]);

  const getStatusStyles = useCallback((status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-cyan-600 border-cyan-400";
      case "in-progress":
        return "text-white bg-blue-600 border-blue-400";
      case "pending":
        return "text-white bg-gray-600 dark:bg-gray-700 border-gray-400";
      default:
        return "text-white bg-gray-600 dark:bg-gray-700 border-gray-400";
    }
  }, []);

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-300 py-8 sm:py-12 pb-32 sm:pb-48 relative z-20"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full min-h-[600px] sm:min-h-[700px] flex items-center justify-center px-4">
        <div
          className="absolute w-full h-full flex items-center justify-center z-10"
          ref={orbitRef}
          style={{
            perspective: isMobile ? "800px" : "1000px",
          }}
        >
          {/* Centro orbital com tema adaptado - tamanho responsivo */}
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-500 flex items-center justify-center z-50" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
            <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-cyan-400/30 dark:border-cyan-300/20 opacity-70" style={{ animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}></div>
            <div
              className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-cyan-400/20 dark:border-cyan-300/10 opacity-50"
              style={{ animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s' }}
            ></div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-cyan-50 backdrop-blur-md shadow-lg shadow-cyan-500/50"></div>
          </div>

          {/* Órbita - tamanho responsivo */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-cyan-300/30 dark:border-cyan-600/20 z-10"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-500 cursor-pointer will-change-transform"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Efeito de energia ao redor do nó */}
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0) 70%)`,
                    width: `${item.energy * 0.3 + 30}px`,
                    height: `${item.energy * 0.3 + 30}px`,
                    left: `-${(item.energy * 0.3 + 30 - 30) / 2}px`,
                    top: `-${(item.energy * 0.3 + 30 - 30) / 2}px`,
                  }}
                ></div>

                {/* Nó orbital - tamanho responsivo */}
                <div
                  className={`
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-cyan-600 text-white dark:bg-cyan-500"
                      : isRelated
                      ? "bg-cyan-400 text-white dark:bg-cyan-600"
                      : "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400"
                  }
                  border-2
                  ${
                    isExpanded
                      ? "border-cyan-400 shadow-lg shadow-cyan-500/50 dark:border-cyan-300 dark:shadow-cyan-400/50"
                      : isRelated
                      ? "border-cyan-500 animate-pulse dark:border-cyan-400"
                      : "border-cyan-300 dark:border-cyan-700"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125 sm:scale-150" : "hover:scale-110"}
                `}
                >
                  <Icon size={isMobile ? 14 : 16} />
                </div>

                {/* Título do nó */}
                <div
                  className={`
                  absolute top-10 sm:top-12 whitespace-nowrap
                  text-[10px] sm:text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-cyan-600 dark:text-cyan-400 scale-110 sm:scale-125" : "text-gray-700 dark:text-gray-300"}
                `}
                >
                  {item.title}
                </div>

                {/* Card expandido - responsivo com z-index alto */}
                {isExpanded && (
                  <Card className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 w-72 sm:w-80 md:w-96 max-w-[calc(100vw-2rem)] bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-cyan-300 dark:border-cyan-700 shadow-2xl shadow-cyan-500/30 dark:shadow-cyan-500/20 overflow-visible transition-all duration-300 z-[250]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-cyan-500 dark:bg-cyan-400"></div>
                    <CardHeader className="pb-2 px-4 sm:px-6">
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <Badge
                          className={`px-2 text-[10px] sm:text-xs ${getStatusStyles(item.status)}`}
                        >
                          {item.status === "completed"
                            ? "COMPLETO"
                            : item.status === "in-progress"
                            ? "EM PROGRESSO"
                            : "PENDENTE"}
                        </Badge>
                        <span className="text-[10px] sm:text-xs font-mono text-gray-500 dark:text-gray-400">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-xs sm:text-sm mt-2 text-gray-900 dark:text-white">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-[11px] sm:text-xs text-gray-700 dark:text-gray-300 px-4 sm:px-6">
                      <p className="leading-relaxed">{item.content}</p>

                      {/* Nós conectados */}
                      {item.relatedIds.length > 0 && (
                        <div className="mt-3 sm:mt-4 pt-3 border-t border-gray-200 dark:border-slate-700">
                          <div className="flex items-center mb-2">
                            <Link size={10} className="text-cyan-600 dark:text-cyan-400 mr-1" />
                            <h4 className="text-[10px] sm:text-xs uppercase tracking-wider font-medium text-gray-600 dark:text-gray-400">
                              Fases Conectadas
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-5 sm:h-6 px-1.5 sm:px-2 py-0 text-[10px] sm:text-xs rounded-md border-cyan-300 dark:border-cyan-700 bg-transparent hover:bg-cyan-50 dark:hover:bg-cyan-950 text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-100 transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={6}
                                    className="ml-0.5 sm:ml-1 text-cyan-500 dark:text-cyan-400"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
