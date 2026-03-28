import type { BingoSquareData } from '../types';

interface ScavengerHuntScreenProps {
  items: BingoSquareData[];
  markedItems: Set<number>;
  onItemMark: (itemId: number) => void;
  onReset: () => void;
}

export function ScavengerHuntScreen({
  items,
  markedItems,
  onItemMark,
  onReset,
}: ScavengerHuntScreenProps) {
  const progress = Math.round((markedItems.size / items.length) * 100);
  const isComplete = markedItems.size === items.length;

  return (
    <div className="relative flex flex-col min-h-full bg-gradient-to-b from-void via-upside-down to-void">
      {/* Animated background */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-neon-purple to-transparent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-neon-cyan to-transparent opacity-5 rounded-full blur-3xl"></div>

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between p-4 border-b-2 border-neon-cyan bg-void-light/80 backdrop-blur rounded-b-3xl">
        <button
          onClick={onReset}
          className="text-neon-cyan hover:text-neon-pink text-sm px-3 py-1.5 rounded-xl border border-neon-cyan neon-border-cyan transition-all font-bold tracking-widest"
        >
          ← BACK
        </button>
        <h1 className="font-black text-neon-pink text-2xl tracking-widest flicker">
          SCAVENGER HUNT
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Progress section */}
      <div className="relative z-10 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-neon-cyan font-bold tracking-widest text-sm">Progress</span>
            <span className="text-neon-pink font-black text-lg">{markedItems.size} / {items.length}</span>
          </div>
          {/* Progress bar */}
          <div className="h-2 bg-void-light border-2 border-neon-cyan rounded-full overflow-hidden neon-border-cyan">
            <div
              className="h-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {isComplete && (
            <div className="mt-2 text-center text-neon-pink font-black tracking-widest text-sm glitch">
              ✦ HUNT COMPLETE! ✦
            </div>
          )}
        </div>
      </div>

      {/* Items grid */}
      <div className="relative z-10 flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => !item.isFreeSpace && onItemMark(item.id)}
                disabled={item.isFreeSpace}
                className={`relative p-4 rounded-2xl transition-all duration-200 font-bold text-sm text-center cursor-pointer active:scale-95 ${
                  item.isMarked
                    ? 'bg-neon-pink text-void border-2 border-neon-pink neon-pulse hover:shadow-lg hover:shadow-neon-pink/50'
                    : 'bg-void-light text-neon-cyan border-2 border-neon-cyan hover:border-neon-pink hover:shadow-lg hover:shadow-neon-cyan/50'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  {item.isMarked ? (
                    <span className="text-lg">✓</span>
                  ) : (
                    <span className="text-lg opacity-50">○</span>
                  )}
                  <span className="text-xs leading-tight">{item.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center text-neon-cyan/50 text-xs py-3 font-mono tracking-widest border-t border-neon-cyan/30">
        {isComplete ? '// MISSION ACCOMPLISHED' : '// FIND ALL ITEMS'}
      </footer>
    </div>
  );
}
