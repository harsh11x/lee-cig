import Link from "next/link"

export default function CatchAllPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-serif mb-4">Coming Soon</h1>
      <p className="text-white/60 mb-8">This page is currently under construction.</p>
      <Link href="/" className="px-6 py-2 border border-white/20 hover:bg-white hover:text-black transition-colors">
        Return Home
      </Link>
    </div>
  )
}
