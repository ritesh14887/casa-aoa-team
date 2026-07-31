export default function MobileCard({ member, delay = 0, onSelect }) {
  const imageSrc = `/images/${member.imageKey}.png`

  return (
    <div
      className="glass-card p-6 rounded-xl animate-slide-up card-clickable"
      style={{ animationDelay: `${delay}s` }}
      onClick={() => onSelect?.(member)}
    >
      {/* Top row: avatar + name/role | badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-4">
          <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/10 shrink-0">
            <img
              className="w-full h-full object-cover"
              src={imageSrc}
              alt={member.name}
              onError={(e) => { e.currentTarget.src = '/images/IMAGE_1.png' }}
            />
          </div>
          <div>
            <h3 className="font-headline-md text-on-surface text-lg">{member.name}</h3>
            <p className="text-md text-on-surface-variant font-medium tracking-wide mt-0.5">
              {member.profession}
            </p>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 text-[11px]">
              Flat Number: {member.contact.flat}
            </p>
          </div>
        </div>
        <span className="gold-glow-badge bg-secondary/10 text-secondary px-3 py-1 rounded-full text-md font-bold uppercase tracking-wide shrink-0 ml-2">
          {member.role}
        </span>
      </div>

      {/* Details */}
      <div className="space-y-3">
        {member.lives_since && (
          <div className="flex items-center gap-2 text-on-surface-variant text-sm">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>Resident since {member.lives_since}</span>
          </div>
        )}
        <div className="bg-white/5 p-4 rounded-lg">
          <p className="font-body-md text-on-surface italic leading-relaxed text-sm line-clamp-3">
            "{member.vision}"
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-end">
        <button
          className="flex items-center gap-2 text-accent-blue text-md font-bold uppercase tracking-wide hover:opacity-80 transition-opacity"
          onClick={(e) => { e.stopPropagation(); onSelect?.(member) }}
        >
          View Profile{' '}
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
