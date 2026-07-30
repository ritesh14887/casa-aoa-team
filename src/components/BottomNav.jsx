export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 bg-surface-container-lowest/90 backdrop-blur-2xl border-t border-white/5 shadow-[0_-4px_24px_rgba(0,230,57,0.05)] md:hidden">
      <button className="flex flex-col items-center justify-center text-tertiary font-bold drop-shadow-[0_0_8px_rgba(0,230,57,0.4)] active:scale-90 transition-transform duration-150">
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          group
        </span>
        <span className="font-label-sm text-label-sm mt-1">Directory</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface active:scale-90 transition-transform duration-150">
        <span className="material-symbols-outlined">event_available</span>
        <span className="font-label-sm text-label-sm mt-1">Events</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface active:scale-90 transition-transform duration-150 relative">
        <span className="material-symbols-outlined">forum</span>
        <span className="font-label-sm text-label-sm mt-1">Chat</span>
        <span className="absolute top-0 right-1 w-2 h-2 bg-tertiary rounded-full shadow-[0_0_5px_rgba(0,230,57,0.8)]" />
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface active:scale-90 transition-transform duration-150">
        <span className="material-symbols-outlined">settings</span>
        <span className="font-label-sm text-label-sm mt-1">Settings</span>
      </button>
    </nav>
  )
}
