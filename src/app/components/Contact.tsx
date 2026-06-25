import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from '../../imports/image-5.png';
import { Github, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-70px)] bg-black flex items-center justify-center px-4 sm:px-8 py-8 sm:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="text-3xl sm:text-4xl text-[#E0E0E0] mb-8 sm:mb-12"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Contact And Follow Us
        </h1>

        <div className="mb-8 sm:mb-12 flex flex-col items-center">
          <div className="mb-6">
            <ImageWithFallback
              src={profileImage}
              alt="Mr Erco"
              className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-[#404040]"
            />
          </div>
          <h2
            className="text-2xl sm:text-3xl text-[#E0E0E0] mb-2"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Mr Erco
          </h2>
          <p
            className="text-base sm:text-lg text-[#909090]"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Head Of TerminalX
          </p>
        </div>

        <p
          className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed mb-8 sm:mb-12"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Behind TerminalX stands a single architect — building fast, minimal, and uncompromising systems. Designed for developers who prefer silence over spectacle.
        </p>

        <div className="text-left max-w-2xl mx-auto mb-8 sm:mb-12">
          <h3
            className="text-xl sm:text-2xl text-[#E0E0E0] mb-4 sm:mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            About Developer
          </h3>
          <p
            className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            I'm Mr Erco — the developer behind TerminalX. I focus on building fast, minimal, and uncompromising digital systems that prioritize clarity, control, and efficiency. My work blends clean engineering with intentional design, creating tools that stay silent in the background while empowering developers to move with precision. Every project I build reflects a commitment to performance, simplicity, and a workflow free from noise or distraction.
          </p>
        </div>

        <div className="text-center">
          <h3
            className="text-xl sm:text-2xl text-[#E0E0E0] mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Follow Me
          </h3>
          <div className="flex justify-center gap-6 sm:gap-8">
            <a
              href="https://github.com/Mr-Erco"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] border border-[#404040] rounded-full p-4 sm:p-5 hover:bg-[#2A2A2A] transition-colors"
            >
              <Github className="w-6 h-6 sm:w-8 sm:h-8 text-[#E0E0E0]" />
            </a>
            <a
              href="https://x.com/OfficalMrErco"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] border border-[#404040] rounded-full p-4 sm:p-5 hover:bg-[#2A2A2A] transition-colors"
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-[#E0E0E0]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@Offical-Mr-Erco"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] border border-[#404040] rounded-full p-4 sm:p-5 hover:bg-[#2A2A2A] transition-colors"
            >
              <Youtube className="w-6 h-6 sm:w-8 sm:h-8 text-[#E0E0E0]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
