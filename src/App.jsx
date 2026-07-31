import { useState } from 'react'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import MemberCard from './components/MemberCard'
import MemberModal from './components/MemberModal'
import { teamMembers } from './data/teamData'

function ContactCTA() {
  return (
    <div className="mt-section-gap">
      <div className="glass-card p-6 md:p-8 rounded-xl text-center relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/10 blur-[40px] rounded-full pointer-events-none" />
        <h4 className="font-headline-md text-on-surface mb-2">Have a question?</h4>
        <p className="font-body-md text-on-surface-variant mb-6">
          Reach out to the AOA team for any community-related inquiries or suggestions.
        </p>
        <a
          href="mailto:casawoodstock.aoa.team@gmail.com?subject=Queries%20regarding%20Society%3A%20"
          className="block w-full py-4 bg-secondary text-black font-bold rounded-lg text-center
                     active:scale-95 transition-all
                     shadow-[0_0_20px_rgba(233,195,73,0.15)]
                     hover:shadow-[0_0_30px_rgba(233,195,73,0.3)]">
          CONTACT AOA TEAM
        </a>
      </div>
    </div>
  )
}

export default function App() {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <div className="dark overflow-x-hidden">
      <div className="mesh-bg" />
      <Header />

      <main className="pt-20 md:pt-32 pb-24 md:pb-32 px-4 md:px-10 max-w-[1200px] mx-auto">

        {/* Hero header — left on mobile, centred on desktop */}
        <div className="mb-10 md:mb-section-gap">
          <h1 className="font-display-md-mobile text-display-lg-mobile
                         md:font-display-lg md:text-display-lg
                         text-on-surface tracking-tight mb-2
                         md:text-center">
            Know Your AOA Team
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant opacity-80 leading-relaxed
                        md:text-center md:max-w-2xl md:mx-auto">
            The team dedicated to the excellence of Casa Woodstock.
          </p>
        </div>

        {/* Responsive grid — 1 col → 2 col → 3 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, i) => (
            <MemberCard
              key={member.id}
              member={member}
              delay={0.05 + i * 0.06}
              onSelect={setSelectedMember}
            />
          ))}
        </div>

        <ContactCTA />
      </main>

      {/* <BottomNav /> */}

      {selectedMember && (
        <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </div>
  )
}
