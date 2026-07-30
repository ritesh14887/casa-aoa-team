export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-surface/80 backdrop-blur-xl border-b border-white/10 z-50 flex items-center justify-between px-container-padding-mobile md:px-container-padding-desktop h-16">
      <div className="flex items-center gap-4">
        <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
          Casa Woodstock AOA Team
        </span>
      </div>
    </header>
  )
}
