interface StartScreenProps {
  onSelectMode: (mode: 'bingo' | 'scavenger') => void;
}

export function StartScreen({ onSelectMode }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-b from-void via-upside-down to-void overflow-hidden">
      {/* Animated portal backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-neon-purple via-neon-pink to-transparent opacity-10 portal-spin blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-neon-cyan to-neon-purple opacity-10 portal-spin blur-3xl" style={{ animationDirection: 'reverse' }}></div>
      
      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none"></div>

      <div className="relative text-center max-w-2xl z-10">
        {/* Main title */}
        <h1 className="text-7xl font-black mb-2 flicker tracking-widest">
          SOC OPS
        </h1>
        
        {/* Subtitle */}
        <div className="h-8 mb-12 overflow-hidden">
          <p className="text-2xl text-neon-cyan cyan-glow font-bold tracking-widest">
            CHOOSE YOUR MISSION
          </p>
        </div>

        {/* Decorative line */}
        <div className="w-40 h-0.5 mx-auto mb-12 bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>

        {/* Mode selection cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Bingo Mode */}
          <div
            onClick={() => onSelectMode('bingo')}
            className="relative group cursor-pointer transform transition-all hover:scale-105"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-pink opacity-25 rounded-3xl blur-lg group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-void-light backdrop-blur border-2 border-neon-pink p-8 rounded-3xl neon-border hover:border-neon-cyan transition-all">
              <div className="text-5xl mb-3">◆</div>
              <h2 className="text-2xl font-black text-neon-pink mb-2 tracking-widest">BINGO</h2>
              <p className="text-neon-cyan text-sm font-mono leading-relaxed">
                Find 5 in a row<br/>Classic social bingo
              </p>
            </div>
          </div>

          {/* Scavenger Hunt Mode */}
          <div
            onClick={() => onSelectMode('scavenger')}
            className="relative group cursor-pointer transform transition-all hover:scale-105"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan opacity-25 rounded-3xl blur-lg group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-void-light backdrop-blur border-2 border-neon-cyan p-8 rounded-3xl neon-border-cyan hover:border-neon-pink transition-all">
              <div className="text-5xl mb-3">✦</div>
              <h2 className="text-2xl font-black text-neon-cyan mb-2 tracking-widest">HUNT</h2>
              <p className="text-neon-pink text-sm font-mono leading-relaxed">
                Check off all items<br/>Complete your scavenger hunt
              </p>
            </div>
          </div>
        </div>

        {/* Bottom decorative text */}
        <div className="text-neon-cyan text-xs tracking-widest opacity-60 glitch">
          ⮜ SELECT YOUR ADVENTURE ⮞
        </div>
      </div>
    </div>
  );
}
