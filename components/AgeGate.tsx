'use client'

interface AgeGateProps {
  onVerify: () => void
}

export default function AgeGate({ onVerify }: AgeGateProps) {
  const handleVerify = () => {
    onVerify()
  }

  const handleExit = () => {
    window.location.href = 'https://www.google.com'
  }

  return (
    <>
      {/* Frosted overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-card/95 backdrop-blur-sm border border-primary/30 rounded p-12 text-center max-w-md w-full shadow-2xl">
          {/* Logo */}
          <div className="text-5xl font-serif font-bold text-primary mb-8 tracking-widest">
            LEEU
          </div>

          {/* Message */}
          <h1 className="text-2xl font-serif font-light text-foreground mb-4">
            Age Verification Required
          </h1>

          <p className="text-foreground/80 text-sm mb-8 font-sans leading-relaxed">
            This site contains adult tobacco content. Please confirm you are 18 years or older to continue.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleVerify}
              className="bg-primary text-background font-sans font-bold py-3 px-8 hover:bg-secondary transition-colors duration-300 text-base"
            >
              I Am 18+
            </button>
            <button
              onClick={handleExit}
              className="border border-muted-foreground/40 text-foreground/70 font-sans py-3 px-8 hover:border-muted-foreground/70 hover:text-foreground transition-colors duration-300 text-sm"
            >
              Exit Site
            </button>
          </div>

          {/* Legal disclaimer */}
          <p className="text-foreground/60 text-xs mt-8 font-sans leading-relaxed">
            STATUTORY WARNING: Tobacco is injurious to health. Smoking causes serious diseases.
          </p>
        </div>
      </div>
    </>
  )
}
