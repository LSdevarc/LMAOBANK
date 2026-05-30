export default function DiamondHands() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 rounded-2xl p-12">
          <h2 className="text-5xl font-black mb-4 gradient-text">
            💎 Diamond Hands System
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold mb-2">Hold for 1 Full Hour</n              <p className="text-gray-400">
                Without selling and receive bonus $CUM on top of your regular distributions
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-bold mb-2">Paper Hands Get Nothing Extra</h3>
              <p className="text-gray-400">
                Loyalty pays. Only Diamond Hands receive the bonus rewards
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold mb-2">Automatic Bonus Drop</h3>
              <p className="text-gray-400">
                Every 1 hour, qualified holders receive their Diamond Hands bonus automatically
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <p className="text-green-400 text-sm font-bold mb-2">✓ DIAMOND HANDS</p>
              <p className="text-2xl font-black mb-2">2x Rewards</p>
              <p className="text-gray-400 text-sm">Regular distribution + Diamond Hands bonus</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <p className="text-red-400 text-sm font-bold mb-2">✗ PAPER HANDS</p>
              <p className="text-2xl font-black mb-2">1x Rewards</p>
              <p className="text-gray-400 text-sm">Regular distribution only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
