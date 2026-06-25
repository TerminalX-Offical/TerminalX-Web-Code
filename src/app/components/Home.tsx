import { Link } from "react-router";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-70px)] bg-black flex items-center justify-center">
      <div className="text-center space-y-6 sm:space-y-8 px-4 sm:px-6 pt-8 sm:pt-16 pb-8">
        {/* Logo */}
        <div className="flex justify-center">

        </div>

        {/* Main Title */}
        <div className="space-y-4 bg-[#1A1A1A] rounded-lg px-4 sm:px-8 py-8 sm:py-12 max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#E0E0E0]"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >TerminalX</h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#909090] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            TerminalX is a mobile‑first software engineering environment built for developers who need a precise, reliable, and efficient workspace on the go. It combines a simulated terminal, lightweight code editor, and structured file system into a clean, unified platform designed for scripting, learning, prototyping, and experimentation. With a focus on performance, clarity, and developer‑centric design, TerminalX delivers a streamlined mobile development experience inspired by modern engineering tools.
          </p>
        </div>

        {/* About Us Section */}
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 pt-10 sm:pt-20 bg-[#1A1A1A] rounded-lg px-4 sm:px-8 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl text-[#E0E0E0]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            About Us
          </h2>
          <div className="space-y-4 text-[#A0A0A0] text-left leading-relaxed text-sm sm:text-base">
            <p>
              TerminalX is a mobile‑first software engineering environment built for developers who need precision, reliability, and a clean workflow. With a simulated terminal, integrated AI assistant, and structured file system, TerminalX delivers a fast, familiar, and efficient development experience on mobile devices.
            </p>
            <p>
              Designed with performance and clarity in mind, TerminalX provides consistent, intuitive tools for scripting, prototyping, automation, and real engineering tasks. Students, hobbyists, and professionals can work flexibly with a minimal, accurate, and developer‑centric interface inspired by modern desktop environments.
            </p>
            <p>
              TerminalX is evolving into a complete engineering platform, focused on stability, transparency, and long‑term maintainability. Our mission is to bring powerful, desktop‑grade development tools and intelligent AI assistance to mobile—helping developers work smarter, learn faster, and build confidently anywhere.
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 pt-10 sm:pt-20 bg-[#1A1A1A] rounded-lg px-4 sm:px-8 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl text-[#E0E0E0]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Newsletter
          </h2>
          <div className="text-[#A0A0A0] text-left leading-relaxed text-sm sm:text-base">
            <p>
              Stay updated with the latest advancements in TerminalX as we continue to push mobile software engineering forward. Our team is actively developing new features, refining the code editor, and expanding the capabilities of the simulated terminal to deliver an even more powerful mobile development experience. From performance improvements to workflow enhancements, TerminalX is evolving rapidly — and this platform will keep you informed on every major update, release, and innovation shaping the future of mobile coding.
            </p>
          </div>
        </div>

        {/* Newsletter Button */}
        <div className="pt-2 sm:pt-4">
          <a
            href="https://terminalx-news-letter.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2A2A2A] hover:bg-[#3A3A3A] text-[#C0C0C0] px-6 sm:px-8 py-3 sm:py-4 rounded border border-[#404040] transition-colors text-sm sm:text-base"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Newsletter
          </a>
        </div>

        {/* View Developer Apps Button */}
        <div className="pt-4 sm:pt-8 pb-8">
          <Link
            to="/download"
            className="inline-block bg-[#2A2A2A] hover:bg-[#3A3A3A] text-[#C0C0C0] px-6 sm:px-8 py-3 sm:py-4 rounded border border-[#404040] transition-colors text-sm sm:text-base"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            View Developer Apps
          </Link>
        </div>
      </div>
    </div>
  );
}
