import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center font-mono font-bold transition-all duration-150 select-none min-h-[70px] text-xs leading-tight rounded cursor-pointer active:scale-95';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-neon-pink text-void neon-pulse border-2 border-neon-pink'
      : 'bg-marked text-void border-2 border-marked'
    : 'bg-void-light text-neon-cyan border-2 border-neon-cyan active:border-neon-pink hover:border-neon-pink hover:shadow-lg hover:shadow-neon-cyan/50';

  const freeSpaceClasses = square.isFreeSpace ? 'font-black text-sm text-neon-pink' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-neon-pink text-lg">✦</span>
      )}
      {square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-neon-cyan text-lg opacity-50">◆</span>
      )}
    </button>
  );
}
