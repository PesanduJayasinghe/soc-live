interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-b from-void via-upside-down to-void overflow-hidden">
      {/* Animated portal background */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-neon-purple via-neon-pink to-transparent opacity-10 portal-spin blur-3xl"></div>
      
      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none"></div>

      <div className="relative text-center max-w-lg z-10">
        {/* Main title with flickering effect */}
        <h1 className="text-6xl font-black mb-2 flicker tracking-widest">
          SOC OPS
        </h1>
        
        {/* Subtitle with glow */}
        <div className="h-8 mb-8 overflow-hidden">
          <p className="text-xl text-neon-cyan cyan-glow font-bold tracking-widest">
            SOCIAL BINGO
          </p>
        </div>

        {/* Decorative line */}
        <div className="w-32 h-0.5 mx-auto mb-8 bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>

        {/* Rules box with neon border */}
        <div className="bg-void-light backdrop-blur border-2 border-neon-cyan p-6 shadow-2xl mb-8 relative neon-border-cyan">
          <div className="absolute -top-3 left-4 bg-void-light px-2">
            <span className="text-neon-cyan text-xs font-bold tracking-widest">[ RULES ]</span>
          </div>
          <ul className="text-left text-neon-cyan text-sm space-y-3 font-mono">
            <li className="flex items-start">
              <span className="text-neon-pink mr-3">→</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-pink mr-3">→</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-pink mr-3">→</span>
              <span>Get 5 in a row to win</span>
            </li>
          </ul>
        </div>

        {/* Start button with neon pulse */}
        <button
          onClick={onStart}
          className="w-full bg-neon-pink text-void font-black py-4 px-8 rounded-lg text-lg neon-pulse transition-all hover:scale-105 tracking-widest"
        >
          [ ENTER THE GAME ]
        </button>

        {/* Bottom decorative text */}
        <div className="mt-8 text-neon-cyan text-xs tracking-widest opacity-60 glitch">
          ⮜ FIND YOUR MATCH ⮞
        </div>
      </div>
    </div>
  );
}
