export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Trade $LMAOBANK',
      description: 'Every trade generates creator fees'
    },
    {
      num: '2',
      title: 'Bot Claims Fees',
      description: 'Our bot claims fees every 90 seconds'
    },
    {
      num: '3',
      title: 'Swap to $LMAO',
      description: 'SOL gets swapped to $LMAO via Jupiter'
    },
    {
      num: '4',
      title: 'Instant Distribution',
      description: '50% distributed instantly to all holders'
    },
    {
      num: '5',
      title: 'Diamond Hands Bonus',
      description: '50% saved for Diamond Hands — bonus drop every 1 hour'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-yellow-500/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-4 gradient-text">
          How It Works
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16">
          Passive income. No staking. No locking. No claim buttons.
        </p>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-gradient-to-br from-yellow-500/20 to-cyan-500/20 border border-yellow-500/30 rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <span className="font-black text-dark text-lg">{step.num}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-yellow-500 to-cyan-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
