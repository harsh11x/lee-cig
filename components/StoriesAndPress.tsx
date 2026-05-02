'use client'

import Image from 'next/image'

const stories = [
  {
    id: 1,
    title: 'The Smokeless World – A Conversation',
    date: '30 April 2026',
    description: "Different speeds. Different maturities. Different rules. That's the reality of a region that houses 78% of the global population and 25/33 of the world's megacities.",
    category: 'Stories and features',
    image: '/images/stories-1.png'
  },
  {
    id: 2,
    title: 'World Earth Day 2026: Supporting the Transition to a Lower-Carbon Future',
    date: '22 April 2026',
    description: "As we mark World Earth Day 2026, we reaffirm our commitment to building A Better Tomorrow™ by continuing our transition towards a more sustainable future.",
    category: 'Stories and features',
    image: '/images/stories-2.png'
  }
]

const pressReleases = [
  {
    id: 1,
    title: 'AGM 2026: Chair\'s address',
    date: '15 April 2026',
    category: 'Speech',
    description: 'The 2026 AGM is a valuable opportunity to hear from our shareholders. A forum to look back at our performance during the past year and also to look ahead.'
  },
  {
    id: 2,
    title: 'New Chief Financial Officer Appointed',
    date: '9 April 2026',
    category: 'Press release',
    description: 'We are pleased to announce the appointment of our new Chief Financial Officer and Executive Director with effect from 1 September 2026.'
  }
]

export default function StoriesAndPress() {
  return (
    <section className="w-full bg-primary text-primary-foreground py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16">
          {/* Left Column - Stories */}
          <div>
            <h2 className="text-3xl font-sans font-bold mb-10 tracking-tight">Latest stories and features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stories.map(story => (
                <div key={story.id} className="flex flex-col group cursor-pointer">
                  <div className="relative h-64 mb-6 overflow-hidden rounded-sm">
                    <Image 
                      src={story.image} 
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold text-primary-foreground/80 mb-3">
                    <span>{story.category}</span>
                    <span>{story.date}</span>
                  </div>
                  <h3 className="text-xl font-bold font-sans mb-3 group-hover:text-secondary transition-colors leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed font-sans">
                    {story.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Press Releases */}
          <div className="lg:pl-8 lg:border-l border-primary-foreground/20">
            <h2 className="text-3xl font-sans font-bold mb-10 tracking-tight">Latest press releases</h2>
            <div className="flex flex-col gap-0">
              {pressReleases.map((press, index) => (
                <div key={press.id} className={`py-6 flex flex-col group cursor-pointer ${index !== 0 ? 'border-t border-primary-foreground/20' : ''}`}>
                  <div className="flex justify-between items-center text-xs font-semibold text-primary-foreground/80 mb-3">
                    <span>{press.category}</span>
                    <span>{press.date}</span>
                  </div>
                  <h3 className="text-xl font-bold font-sans mb-3 group-hover:text-secondary transition-colors leading-tight">
                    {press.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed font-sans">
                    {press.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
