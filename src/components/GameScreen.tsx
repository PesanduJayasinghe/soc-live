import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="relative flex flex-col min-h-full bg-gradient-to-b from-void via-upside-down to-void">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-neon-purple to-transparent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-neon-pink to-transparent opacity-5 rounded-full blur-3xl"></div>

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between p-4 border-b-2 border-neon-cyan bg-void-light/80 backdrop-blur">
        <button
          onClick={onReset}
          className="text-neon-cyan hover:text-neon-pink text-sm px-3 py-1.5 rounded border border-neon-cyan neon-border-cyan transition-all font-bold tracking-widest"
        >
          ← BACK
        </button>
        <h1 className="font-black text-neon-pink text-2xl tracking-widest flicker">
          SOC OPS
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="relative z-10 text-center text-neon-cyan text-xs py-3 px-4 font-mono font-bold tracking-widest">
        &gt; TAP SQUARES TO MARK MATCHES
      </p>

      {/* BINGO indicator */}
      {hasBingo && (
        <div className="relative z-10 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-pink text-void-light text-center py-3 font-black text-lg tracking-widest animate-pulse border-y-2 border-neon-cyan">
          ◆ BINGO! YOU GOT A LINE! ◆
        </div>
      )}

      {/* Board Container */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4">
        <div className="relative">
          {/* Glow background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan opacity-20 rounded-lg blur-lg"></div>
          
          {/* Board with neon border */}
          <div className="relative border-2 border-neon-cyan p-2 bg-void-light neon-border-cyan rounded-lg">
            <BingoBoard
              board={board}
              winningSquareIds={winningSquareIds}
              onSquareClick={onSquareClick}
            />
          </div>
        </div>
      </div>

      {/* Footer info */}
      <footer className="relative z-10 text-center text-neon-cyan/50 text-xs py-2 font-mono tracking-widest">
        // FIND 5 IN A ROW
      </footer>
    </div>
  );
}
