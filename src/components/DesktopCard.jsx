const glowColorMap = {
  President: 'bg-accent-blue/5 group-hover:bg-accent-blue/10',
  'Vice President': 'bg-accent-blue/5 group-hover:bg-accent-blue/10',
  'General Secretary': 'bg-accent-blue/5 group-hover:bg-accent-blue/10',
  Treasurer: 'bg-accent-blue/5 group-hover:bg-accent-blue/10',
  'Joint Secretary': 'bg-accent-blue/5 group-hover:bg-accent-blue/10',
  'Joint Treasurer': 'bg-accent-blue/5 group-hover:bg-accent-blue/10',
  'Executive Member': 'bg-accent-blue/5 group-hover:bg-accent-blue/10',
}

export default function DesktopCard({ member, onSelect }) {
  const imageSrc = `/images/${member.imageKey}.png`
  const glowClass = glowColorMap[member.role] ?? 'bg-accent-blue/5 group-hover:bg-accent-blue/10'

  return (
    <div
      className="glass-card rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden group card-clickable"
      onClick={() => onSelect?.(member)}
    >
      {/* Decorative glow */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 blur-3xl transition-colors ${glowClass}`}
      />

      {/* Avatar */}
      <div className="w-32 h-32 rounded-full border-2 border-white/10 p-1 mb-6 relative z-10">
        <div className="w-full h-full rounded-full overflow-hidden hover:grayscale-0 transition-all duration-500">
          <img
            className="w-full h-full object-cover"
            src={imageSrc}
            alt={member.name}
            onError={(e) => { e.currentTarget.src = '/images/IMAGE_1.png' }}
          />
        </div>
      </div>

      {/* Role + name + profession */}
      <div className="mb-4 relative z-10">
        <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-xs font-bold rounded-full uppercase tracking-wide mb-3 border border-secondary/20">
          {member.role}
        </span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-1">{member.name}</h3>
        <p className="text-sm text-on-surface-variant font-medium tracking-wide">
          {member.profession}
        </p>
      </div>

      {/* Details */}
      <div className="space-y-4 mt-4 w-full relative z-10">
        <div className="flex items-center justify-between py-3 border-y border-white/5">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase opacity-50">
            Flat Number
          </span>
          <span className="font-label-sm text-label-sm text-on-surface">{member.contact.flat}</span>
        </div>
        {member.lives_since && (
          <div className="flex items-center justify-between py-1">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase opacity-50">
              Resident since
            </span>
            <span className="font-label-sm text-label-sm text-on-surface">{member.lives_since}</span>
          </div>
        )}
        <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed pt-2 line-clamp-4">
          "{member.vision}"
        </p>
      </div>

      {/* Connect button */}
      <div className="mt-6 relative z-10 w-full">
        <button
          className="flex items-center justify-center gap-2 w-full text-accent-blue text-xs font-bold uppercase tracking-wide hover:opacity-80 transition-opacity"
          onClick={(e) => { e.stopPropagation(); onSelect?.(member) }}
        >
          View Profile <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
