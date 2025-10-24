import * as React from "react";

// Função utilitária cn (classnames)


// Componente GooeyText
export default function GooeyTextLTCloud() {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);
  
  // Frases que vão alternar
  const texts = React.useMemo(
    () => [
      "LT Cloud",
      "Inovação Digital",
      "Tecnologia Avançada",
      "Soluções Inteligentes",
      "Transformação Tech",
      "Futuro Conectado",
      "Cloud Computing",
      "IA & Automação"
    ],
    []
  );
  
  const morphTime = 1.5;
  const cooldownTime = 2;

  React.useEffect(() => {
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    interface MorphTextRefs {
        current: HTMLSpanElement | null;
    }

    interface SetMorphFn {
        (fraction: number): void;
    }

    const setMorph: SetMorphFn = (fraction) => {
        if (
            (text1Ref as MorphTextRefs).current &&
            (text2Ref as MorphTextRefs).current
        ) {
            (text2Ref as MorphTextRefs).current!.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            (text2Ref as MorphTextRefs).current!.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            fraction = 1 - fraction;
            (text1Ref as MorphTextRefs).current!.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            (text1Ref as MorphTextRefs).current!.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        }
    };

    const doCooldown = () => {
      morph = 0;
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    function animate() {
      requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
          }
        }
        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
  }, [texts]);

  return (
    <div className="relative inline-block">
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex items-center justify-center"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          ref={text1Ref}
          className="absolute inline-block select-none text-center text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent"
        />
        <span
          ref={text2Ref}
          className="absolute inline-block select-none text-center text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent"
        />
      </div>
      
      {/* Div invisível para manter o espaço */}
      <div className="invisible text-5xl md:text-7xl lg:text-8xl font-bold">
        Tecnologia Avançada
      </div>
    </div>
  );
}