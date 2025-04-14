export default function TrackingErrorPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-cyan-300 flex items-center justify-center px-4">
      <div className="max-w-lg text-center p-8 border border-pink-600 rounded-xl shadow-[0_0_30px_rgba(236,72,153,0.5)]">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
          Device Not Found
        </h1>
        <p className="text-lg mb-6 font-mono text-cyan-400">
          Please verify the UCOD you entered. It doesn't match any registered
          devices.
        </p>

        <div className="text-sm font-mono space-y-2 text-cyan-500">
          <p>🔍 Check the unique code on the back side of your device.</p>
          <p>📦 Or scan the QR code printed on the box.</p>
          <p>
            📞 If you're still facing issues,{" "}
            <span className="text-pink-400 underline">contact us</span>.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/tracking"
            className="inline-block px-6 py-2 rounded-md bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-semibold hover:from-cyan-400 hover:to-pink-500 transition-all duration-300 hover:scale-105"
          >
            Try Again
          </a>
        </div>
      </div>
    </div>
  );
}
