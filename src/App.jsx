function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="text-center px-6 py-12 bg-white/10 backdrop-blur-md rounded-3xl shadow-xl border border-white/20">
        <h1 className="text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">Hello, World!</h1>
        <p className="mt-4 text-lg text-white/80">Your app is up and running.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="/test"
            className="inline-flex items-center rounded-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 text-sm font-semibold transition-colors"
          >
            Check backend connection
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
