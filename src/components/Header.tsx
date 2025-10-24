// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "../context/ThemeContext";

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <header className="fixed w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
//       <div className="container mx-auto flex items-center justify-between p-4">
        
//         {/* Logo */}
//         <div className="relative group">
//           <h1 className="text-2xl font-bold transition-all duration-300 group-hover:scale-105">
//             <span className="text-gray-900 dark:text-white">LT</span>
//             <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Cloud</span>
//           </h1>
//           <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-300"></div>
//         </div>
        
//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6">
//           <a 
//             href="#home" 
//             className="relative py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 group font-medium"
//           >
//             Início
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
//           </a>
//           <a 
//             href="#services" 
//             className="relative py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 group font-medium"
//           >
//             Serviços
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
//           </a>
//           <a 
//             href="#about" 
//             className="relative py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 group font-medium"
//           >
//             Sobre
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
//           </a>
//           <a 
//             href="#testimonials" 
//             className="relative py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 group font-medium"
//           >
//             Clientes
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
//           </a>
//           <a 
//             href="#contact" 
//             className="relative py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 group font-medium"
//           >
//             Contato
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
//           </a>
          
//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className="ml-4 p-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
//             aria-label="Toggle theme"
//           >
//             {theme === 'light' ? (
//               <Moon className="w-5 h-5 text-gray-700" />
//             ) : (
//               <Sun className="w-5 h-5 text-cyan-400" />
//             )}
//           </button>
//         </nav>
        
//         {/* Mobile Controls */}
//         <div className="flex items-center gap-4 md:hidden">
//           {/* Theme Toggle Mobile */}
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300"
//             aria-label="Toggle theme"
//           >
//             {theme === 'light' ? (
//               <Moon className="w-5 h-5 text-gray-700" />
//             ) : (
//               <Sun className="w-5 h-5 text-cyan-400" />
//             )}
//           </button>

//           {/* Mobile Menu Button */}
//           <button 
//             className="text-2xl text-cyan-600 dark:text-cyan-400 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110" 
//             onClick={() => setOpen(!open)}
//           >
//             <div className="relative w-6 h-6">
//               <FaBars 
//                 className={`absolute inset-0 transition-all duration-300 ${
//                   open ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
//                 }`} 
//               />
//               <FaTimes 
//                 className={`absolute inset-0 transition-all duration-300 ${
//                   open ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
//                 }`} 
//               />
//             </div>
//           </button>
//         </div>
        
//         {/* Mobile Menu */}
//         <div 
//           className={`absolute top-16 left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 md:hidden transition-all duration-300 overflow-hidden ${
//             open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
//           }`}
//         >
//           <div className="flex flex-col items-center gap-2 py-6">
//             <a 
//               onClick={() => setOpen(false)} 
//               href="#home"
//               className="w-full text-center py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-all duration-300 font-medium"
//             >
//               Início
//             </a>
//             <a 
//               onClick={() => setOpen(false)} 
//               href="#services"
//               className="w-full text-center py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-all duration-300 font-medium"
//             >
//               Serviços
//             </a>
//             <a 
//               onClick={() => setOpen(false)} 
//               href="#about"
//               className="w-full text-center py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-all duration-300 font-medium"
//             >
//               Sobre
//             </a>
//             <a 
//               onClick={() => setOpen(false)} 
//               href="#testimonials"
//               className="w-full text-center py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-all duration-300 font-medium"
//             >
//               Clientes
//             </a>
//             <a 
//               onClick={() => setOpen(false)} 
//               href="#contact"
//               className="w-full text-center py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-all duration-300 font-medium"
//             >
//               Contato
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-200 dark:border-slate-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="relative group">
          <h1 className="text-2xl font-bold transition-transform duration-300 group-hover:scale-105">
            <span className="text-gray-900 dark:text-white">LT</span>
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Cloud</span>
          </h1>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-300"></div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#home"
            className="relative py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 group font-medium"
          >
            Início
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#services"
            className="relative py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 group font-medium"
          >
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#about"
            className="relative py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 group font-medium"
          >
            Sobre
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#testimonials"
            className="relative py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 group font-medium"
          >
            Clientes
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#contact"
            className="relative py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 group font-medium"
          >
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-200 hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-700" />
            ) : (
              <Sun className="w-5 h-5 text-cyan-400" />
            )}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-700" />
            ) : (
              <Sun className="w-5 h-5 text-cyan-400" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="text-2xl text-cyan-600 dark:text-cyan-400 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-110"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <FaBars
                className={`absolute inset-0 transition-all duration-300 ${
                  open ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
              />
              <FaTimes
                className={`absolute inset-0 transition-all duration-300 ${
                  open ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 md:hidden transition-all duration-300 overflow-hidden ${
            open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2 py-6">
            <a 
              onClick={() => setOpen(false)}
              href="#home"
              className="w-full text-center py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-all duration-200 font-medium"
            >
              Início
            </a>
            <a 
              onClick={() => setOpen(false)}
              href="#services"
              className="w-full text-center py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-all duration-200 font-medium"
            >
              Serviços
            </a>
            <a 
              onClick={() => setOpen(false)}
              href="#about"
              className="w-full text-center py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-all duration-200 font-medium"
            >
              Sobre
            </a>
            <a 
              onClick={() => setOpen(false)}
              href="#testimonials"
              className="w-full text-center py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-all duration-200 font-medium"
            >
              Clientes
            </a>
            <a 
              onClick={() => setOpen(false)}
              href="#contact"
              className="w-full text-center py-3 px-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-all duration-200 font-medium"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}