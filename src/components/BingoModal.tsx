interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none"></div>

      <div className="relative bg-gradient-to-br from-void-light to-upside-down rounded-lg p-2 max-w-xs w-full text-center shadow-2xl border-2 border-neon-pink neon-pulse">
        {/* Inner content box */}
        <div className="bg-void p-6 rounded">
          {/* Portal effect decoration */}
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink to-neon-purple rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-tr from-neon-cyan to-neon-purple rounded-full opacity-20 portal-spin"></div>
              <div className="flex items-center justify-center h-full text-3xl">✦</div>
            </div>
          </div>

          {/* Victory text with glitch effect */}
          <h2 className="text-4xl font-black text-neon-pink mb-2 tracking-widest glitch">
            BINGO!
          </h2>
          
          <p className="text-neon-cyan text-sm mb-6 font-mono font-bold tracking-widest">
            YOU COMPLETED A LINE
          </p>

          {/* Decorative line */}
          <div className="w-20 h-0.5 mx-auto mb-6 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
          
          {/* Button */}
          <button
            onClick={onDismiss}
            className="w-full bg-neon-cyan text-void font-black py-3 px-6 rounded transition-all hover:scale-105 active:scale-95 tracking-widest border-2 border-neon-cyan neon-border-cyan"
          >
            [ CONTINUE ]
          </button>

          {/* Bottom text */}
          <p className="text-neon-pink text-xs mt-4 font-mono opacity-70">
            &gt; KEEP PLAYING
          </p>
        </div>
      </div>
    </div>
  );
}
