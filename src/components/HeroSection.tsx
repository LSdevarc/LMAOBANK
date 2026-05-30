export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-black mb-4 gradient-text">
            LMAOBANK
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-bold">
            Hold $LMAOBANK to $LMAO
          </p>
        </div>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          The first automated revenue share vault on Solana
        </p>

        <div className="bg-gradient-to-r from-yellow-500/10 to-cyan-500/10 border border-yellow-500/30 rounded-xl p-8 mb-12">
          <p className="text-lg text-gray-300 mb-4">
            Every trade on $LMAOBANK generates creator fees that are automatically distributed to holders.
          </p>
          <p className="text-sm text-gray-400">
            Contract: <span className="text-accent font-mono">H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            Get $LMAOBANK
          </button>
          <button className="px-8 py-3 rounded-lg font-bold border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
