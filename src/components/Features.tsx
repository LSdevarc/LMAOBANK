'use client'

export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'No Staking',
      description: 'Just hold and earn. No complicated staking mechanisms.'
    },
    {
      icon: '🔒',
      title: 'No Locking',
      description: 'Your tokens are always yours. No lock-up periods.'
    },
    {
      icon: '🤖',
      title: 'No Claim Buttons',
      description: 'Rewards are distributed automatically to your wallet.'
    },
    {
      icon: '⏱️',
      title: 'Every 90 Seconds',
      description: 'Fees are claimed and distributed continuously.'
    },
    {
      icon: '🚀',
      title: 'Solana Speed',
      description: 'Fast, low-cost transactions on the Solana blockchain.'
    },
    {
      icon: '💰',
      title: 'Real Revenue Share',
      description: 'Genuine value distributed to token holders.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-cyan-500/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-4 gradient-text">
          Why LMAOBANK?
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16">
          Revolutionary tokenomics designed for holders
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-lg p-8 hover:border-accent/50 transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}