import { useEffect } from 'react'

export default function MemberModal({ member, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!member) return null

  const imageSrc = `/images/${member.imageKey}.png`

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end md:items-center justify-center md:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      {/* Panel */}
      <div
        className="modal-enter relative glass-card rounded-t-2xl md:rounded-xl w-full md:max-w-lg max-h-[92vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle (mobile) */}
        <div className="flex justify-center pt-3 pb-1 md:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:scale-90 transition-all duration-150"
          onClick={onClose}
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[18px] text-on-surface">close</span>
        </button>

        {/* Hero header */}
        <div className="px-8 pt-6 pb-6 flex flex-col items-center text-center border-b border-white/10">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full border-2 border-accent-blue/50 p-1 mb-4 shadow-[0_0_24px_rgba(59,140,248,0.2)]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={imageSrc}
                alt={member.name}
                onError={(e) => { e.currentTarget.src = '/images/IMAGE_1.png' }}
              />
            </div>
          </div>

          {/* Role badge */}
          <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-xs font-bold rounded-full uppercase tracking-wide mb-3 border border-secondary/20">
            {member.role}
          </span>

          {/* Name */}
          <h2 className="text-2xl font-extrabold text-on-surface tracking-tight leading-tight mb-1">
            {member.name}
          </h2>

          {/* Profession */}
          <p className="text-sm text-on-surface-variant font-medium tracking-wide mb-4">
            {member.profession}
          </p>

          {/* Meta chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-on-surface-variant bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Flat: {member.contact.flat}
            </span>
            {member.lives_since && (
              <span className="text-xs text-on-surface-variant bg-white/5 border border-white/10 px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                Resident since {member.lives_since}
              </span>
            )}
            {member.contact.email && (
              <a
                href={`mailto:${member.contact.email}`}
                className="text-xs text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-3 py-1 rounded-full hover:bg-accent-blue/20 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {member.contact.email}
              </a>
            )}
          </div>
        </div>

        {/* Body content */}
        <div className="px-8 pt-6 pb-2 space-y-6">
          {/* Introduction */}
          <section>
            <h4 className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-2">
              Introduction
            </h4>
            <p className="text-base text-on-surface leading-relaxed whitespace-pre-line">
              {member.introduction}
            </p>
          </section>

          {/* Divider */}
          <div className="border-t border-white/5" />

          {/* Vision */}
          <section>
            <h4 className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-2">
              Vision
            </h4>
            <p className="text-base text-on-surface-variant italic leading-relaxed whitespace-pre-line">
              "{member.vision}"
            </p>
          </section>
        </div>

        {/* Footer close */}
        <div className="px-8 py-6">
          <button
            onClick={onClose}
            className="w-full py-3 border border-accent-blue/30 text-accent-blue text-xs font-bold rounded-lg hover:bg-accent-blue/10 active:scale-[0.98] transition-all uppercase tracking-widest"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
