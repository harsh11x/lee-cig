export default function StatsTicker() {
  const stats = [
    'Est. 1978',
    'Premium Tobacco',
    '40+ Countries',
    '12 Signature Blends',
    'Trusted by Millions',
    'Handcrafted Since Day One'
  ]

  return (
    <div className="bg-dark-warm py-6 overflow-hidden border-y border-gold/20">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-content {
          animation: scroll 40s linear infinite;
        }
        .ticker-content:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="ticker-content flex gap-12 px-12">
          {[...stats, ...stats].map((stat, i) => (
            <span key={i} className="text-gold font-serif text-lg font-light flex items-center">
              {stat}
              {i % stats.length !== stats.length - 1 && (
                <span className="ml-12 text-gold/40">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
