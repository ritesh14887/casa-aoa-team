export default function MemberCard({ member, delay = 0, onSelect }) {
  const imageSrc = `/images/${member.imageKey}.png`

  return (
    <div
      className="glass-card rounded-xl overflow-hidden animate-slide-up card-clickable group relative flex flex-col"
      style={{ animationDelay: `${delay}s` }}
      onClick={() => onSelect?.(member)}
    >
      {/* Corner glow — desktop hover */}
      <div className="hidden md:block absolute top-0 right-0 w-36 h-36 bg-accent-blue/5 group-hover:bg-accent-blue/10 rounded-full -mr-16 -mt-16 blur-3xl transition-colors pointer-events-none" />

      {/* ══ IDENTITY SECTION ══
          mobile  → flex-row (avatar left, info right)
          desktop → flex-col items-center (avatar top, info below)
      */}
      <div className="flex flex-row md:flex-col md:items-center px-4 pt-4 pb-3 md:px-8 md:pt-8 md:pb-4 gap-3 md:gap-0 relative z-10">

        {/* Avatar */}
        <div className="w-[78px] h-[78px] md:w-28 md:h-28 shrink-0 md:mb-5
                        rounded-xl md:rounded-full
                        border border-white/10 md:border-2
                        p-0 md:p-1 overflow-hidden">
          <div className="w-full h-full rounded-[10px] md:rounded-full overflow-hidden transition-all duration-500">
            <img
              className="w-full h-full object-cover"
              src={imageSrc}
              alt={member.name}
              onError={(e) => { e.currentTarget.src = '/images/IMAGE_1.png' }}
            />
          </div>
        </div>

        {/* Core identity */}
        <div className="flex-1 min-w-0 md:w-full md:text-center">

          {/* Role badge */}
          <span className="inline-block px-2.5 py-0.5 md:px-3 md:py-1
                           bg-secondary text-on-secondary
                           text-[12px] md:text-md font-bold
                           rounded-full uppercase tracking-wide
                           border border-secondary/20 mb-1 md:mb-2.5">
            {member.role}
          </span>

          {/* Name */}
          <h3 className="font-semibold md:font-headline-md text-lg md:text-headline-md
                         text-on-surface leading-snug break-words">
            {member.name}
          </h3>

          {/* Profession + icon */}
          <div className="flex items-center md:justify-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[13px] text-on-surface-variant/50 shrink-0">work</span>
            <p className="text-sm text-on-surface-variant font-medium truncate md:whitespace-normal">
              {member.profession}
            </p>
          </div>

          {/* Flat + Since chips */}
          <div className="flex flex-wrap md:justify-center items-center gap-x-3 gap-y-1 mt-2">
            <span className="flex items-center gap-1 text-[14px] text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-accent-blue/60">apartment</span>
              {member.contact.flat}
            </span>
            {member.lives_since && (
              <span className="flex items-center gap-1 text-[14px] text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-accent-blue/60">calendar_today</span>
                Resident since {member.lives_since}
              </span>
            )}
            {member.contact.email && (
              <span className="flex items-center gap-1 text-[11px] text-accent-blue/70 truncate max-w-[140px]"
                onClick={(e) => e.stopPropagation()}>
                <span className="material-symbols-outlined text-[13px]">mail</span>
                <a href={`mailto:${member.contact.email}`} className="truncate hover:underline">
                  {member.contact.email}
                </a>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ══ VISION SECTION ══ */}
      <div className="border-t border-white/5 mx-4 md:mx-8" />

      <div className="flex-1 px-4 md:px-8 py-3 md:py-4 relative z-10">
        {/* Section label */}
        <div className="flex items-center md:justify-center gap-1.5 mb-2">
          <span className="material-symbols-outlined text-[14px] text-accent-blue/70"
            style={{ fontVariationSettings: "'FILL' 1" }}>
            lightbulb
          </span>
          <span className="text-[14px] font-bold text-accent-blue uppercase tracking-widest">Vision</span>
        </div>

        {/* Quote text */}
        <div className="relative">
          {/* Decorative large quote mark — desktop */}
          <span className="hidden md:block absolute -top-1 -left-1 text-[40px] leading-none text-accent-blue/10
                           select-none pointer-events-none">"</span>
          <p className="text-md md:text-sm text-on-surface-variant italic leading-relaxed
                        line-clamp-3 whitespace-pre-line md:pl-3 md:text-center">
            {member.vision}
          </p>
        </div>
      </div>

      {/* ══ FOOTER ══ */}
      <div className="border-t border-white/5 mx-4 md:mx-8" />

      <div className="px-4 md:px-8 py-3 flex items-center justify-between md:justify-center relative z-10">
        <button
          className="flex items-center gap-1.5 text-accent-blue text-[12px] md:text-md font-bold uppercase tracking-wide
                     hover:opacity-80 transition-opacity"
          onClick={(e) => { e.stopPropagation(); onSelect?.(member) }}
        >
          <span className="material-symbols-outlined text-[14px]">person</span>
          View Full Profile
          <span className="material-symbols-outlined text-[13px] md:text-[15px]">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
