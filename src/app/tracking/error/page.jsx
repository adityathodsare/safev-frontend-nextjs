export default function TrackingErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0d1224] to-[#0a0f1c] text-cyan-300 flex items-center justify-center px-4">
      <div className="max-w-xl text-center p-10 border border-pink-600 rounded-2xl shadow-[0_0_30px_rgba(236,72,153,0.5)] bg-[#0f172a]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-pink-500 animate-glow">
          ⚠️ Device Not Found
        </h1>
        <p className="text-lg mb-6 font-mono text-cyan-400">
          The UCOD you entered doesn’t match any of our registered devices.
        </p>

        <div className="text-sm font-mono space-y-3 text-cyan-400">
          <p>🔍 Double-check the UCOD on the back or inside of your device.</p>
          <p>
            📦 You can also scan the QR code printed on your box for accuracy.
          </p>
          <p>
            🧪 Want to see how it works? Try this sample UCOD:{" "}
            <span className="text-pink-400 font-bold tracking-wider bg-black px-2 py-1 rounded border border-pink-600 shadow-sm inline-block">
              sigma001
            </span>
          </p>
          <p>
            📞 Still facing issues?{" "}
            <a
              href="/contact"
              className="text-pink-400 underline hover:text-pink-300 transition"
            >
              Contact our support team
            </a>
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="/tracking"
            className="px-6 py-2 rounded-md bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-semibold hover:from-cyan-400 hover:to-pink-500 transition-all duration-300 hover:scale-105"
          >
            Try Again
          </a>
          <a
            href="/"
            className="px-6 py-2 rounded-md bg-gradient-to-r from-violet-600 to-indigo-400 text-white font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
