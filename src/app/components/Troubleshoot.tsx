import { useState } from "react";

export default function Troubleshoot() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-[calc(100vh-70px)] bg-black py-8 sm:py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1
            className="text-3xl sm:text-4xl text-[#E0E0E0] mb-3 sm:mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Troubleshoot
          </h1>
          <p className="text-sm sm:text-base text-[#909090]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Find solutions to common problems
          </p>
        </div>

        {/* Report Issue Paragraph */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6">
            <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              If you're experiencing an issue, please report it to us as soon as possible. Our team reviews every submission to identify bugs, improve stability, and deliver fixes quickly. Include a brief description of the problem, what you were doing when it occurred, and any error messages so we can resolve it faster.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6">
            <h2
              className="text-lg sm:text-xl text-[#E0E0E0] mb-4 sm:mb-6 text-center"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Contact Us
            </h2>
            {sent ? (
              <p
                className="text-center text-[#A0A0A0] text-sm sm:text-base"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Your message has been sent. We'll get back to you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-[#909090] text-xs sm:text-sm mb-1"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-[#404040] rounded px-3 py-2 text-[#E0E0E0] text-sm focus:outline-none focus:border-[#606060] transition-colors"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="block text-[#909090] text-xs sm:text-sm mb-1"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-[#404040] rounded px-3 py-2 text-[#E0E0E0] text-sm focus:outline-none focus:border-[#606060] transition-colors"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-[#909090] text-xs sm:text-sm mb-1"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full bg-[#0D0D0D] border border-[#404040] rounded px-3 py-2 text-[#E0E0E0] text-sm focus:outline-none focus:border-[#606060] transition-colors resize-none"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                    placeholder="Describe your issue..."
                  />
                </div>
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-[#C0C0C0] px-6 py-2.5 rounded border border-[#404040] transition-colors text-sm"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
