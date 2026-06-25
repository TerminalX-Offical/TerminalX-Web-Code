import image2 from "../../imports/image-2.png";
import image3 from "../../imports/image-3.png";
import terminalAI1 from "../../imports/Screenshot_20260531_131538_Terminal_AI.jpg";
import terminalAI2 from "../../imports/Screenshot_20260531_131521_Terminal_AI.jpg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Download() {
  return (
    <div className="min-h-[calc(100vh-70px)] bg-black py-8 sm:py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1
            className="text-3xl sm:text-4xl text-[#E0E0E0] mb-3 sm:mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Download
          </h1>
          <p className="text-sm sm:text-base text-[#909090]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Get TerminalX on your platform
          </p>
        </div>

        {/* App Card */}
        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-6 sm:p-8">
          <h2
            className="text-2xl sm:text-3xl text-[#E0E0E0] mb-4 sm:mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            TerminalX
          </h2>

          <p
            className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-6 sm:mb-8"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            TerminalX is a lightweight terminal environment built with a focus on speed, reliability, and a clean command‑line workflow. It provides a minimal interface that avoids unnecessary UI elements, allowing users to interact directly with the shell without distractions. The app is designed to handle quick command execution, basic scripting, and everyday terminal tasks while maintaining predictable behavior across devices. Under the hood, TerminalX prioritizes stability and consistent performance, with each update refining the command parser, input handling, and overall responsiveness. As development continues, new features, improvements, and command expansions will be introduced based on real‑world usage, user feedback, and practical developer needs.
          </p>

          {/* Screenshots */}
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center pl-8 sm:pl-16 mb-6 sm:mb-8">
            <div className="border border-[#404040] rounded overflow-hidden w-56 sm:w-72">
              <ImageWithFallback
                src={image2}
                alt="TerminalX — terminal session with apt update and code editor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border border-[#404040] rounded overflow-hidden w-56 sm:w-72">
              <ImageWithFallback
                src={image3}
                alt="TerminalX — Python installation and REPL session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=app.terminalx.mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-[#C0C0C0] px-5 py-2.5 rounded border border-[#404040] transition-colors text-sm"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.33.19.7.24 1.06.15l11.67-11.67-2.83-2.83L3.18 23.76zM20.7 10.06l-2.83-1.63-3.18 3.18 3.18 3.18 2.85-1.64c.81-.47.81-1.63-.02-2.09zM1.44.43C1.17.72 1 1.16 1 1.72v20.56c0 .56.17 1 .44 1.29l.07.07 11.52-11.52v-.27L1.51.36l-.07.07zM13.06 8.24l-9.88-5.7 9.88 9.88 2.83-2.83-2.83-1.35z"/>
            </svg>
            Download on Google Play
          </a>
        </div>

        {/* Terminal AI App Card */}
        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-6 sm:p-8 mt-6 sm:mt-8">
          <h2
            className="text-2xl sm:text-3xl text-[#E0E0E0] mb-4 sm:mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Terminal AI
          </h2>

          <p
            className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-6 sm:mb-8"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            TerminalX AI is a precision‑built intelligence system designed for developers who need clarity, speed, and reliable assistance in a mobile environment. Instead of a cluttered chatbot, TerminalX AI delivers a focused, engineering‑grade experience that feels like working with a real technical partner.
          </p>

          <p
            className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-6 sm:mb-8"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Built into the TerminalX ecosystem, the AI understands terminal workflows, development concepts, scripting logic, debugging patterns, and real engineering structure. Whether you're learning, prototyping, or solving complex problems, TerminalX AI provides accurate, context‑aware responses without noise or distraction.
          </p>

          <p
            className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-6 sm:mb-8"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            TerminalX AI is crafted for students, hobbyists, and professionals who want a clean, minimal, and developer‑centric assistant. It helps you think faster, build smarter, and stay productive anywhere — all inside a mobile‑first environment designed for real work.
          </p>

          {/* Screenshots */}
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center pl-8 sm:pl-16 mb-6 sm:mb-8">
            <div className="border border-[#404040] rounded overflow-hidden w-56 sm:w-72">
              <ImageWithFallback
                src={terminalAI1}
                alt="Terminal AI — intelligent assistance interface"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border border-[#404040] rounded overflow-hidden w-56 sm:w-72">
              <ImageWithFallback
                src={terminalAI2}
                alt="Terminal AI — context-aware developer assistant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.terminalai.mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-[#C0C0C0] px-5 py-2.5 rounded border border-[#404040] transition-colors text-sm"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.33.19.7.24 1.06.15l11.67-11.67-2.83-2.83L3.18 23.76zM20.7 10.06l-2.83-1.63-3.18 3.18 3.18 3.18 2.85-1.64c.81-.47.81-1.63-.02-2.09zM1.44.43C1.17.72 1 1.16 1 1.72v20.56c0 .56.17 1 .44 1.29l.07.07 11.52-11.52v-.27L1.51.36l-.07.07zM13.06 8.24l-9.88-5.7 9.88 9.88 2.83-2.83-2.83-1.35z"/>
            </svg>
            Download on Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
