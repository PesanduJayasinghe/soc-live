import { useState } from 'react';

interface CardDeckScreenProps {
  questions: string[];
  onReset: () => void;
}

export function CardDeckScreen({ questions, onReset }: CardDeckScreenProps) {
  const [currentCard, setCurrentCard] = useState<string | null>(null);
  const [cardCount, setCardCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const getRandomQuestion = () => {
    setIsFlipped(false);
    // Small delay so flip animation resets
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setCurrentCard(questions[randomIndex]);
      setCardCount((prev) => prev + 1);
      setTimeout(() => setIsFlipped(true), 50);
    }, 300);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-b from-void via-upside-down to-void overflow-hidden">
      {/* Animated portal backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-neon-purple via-neon-pink to-transparent opacity-10 portal-spin blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-neon-cyan to-neon-purple opacity-10 portal-spin blur-3xl" style={{ animationDirection: 'reverse' }}></div>

      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-20 flex items-center justify-between w-full max-w-2xl mb-12">
        <button
          onClick={onReset}
          className="text-neon-cyan hover:text-neon-pink text-sm px-3 py-1.5 rounded-xl border border-neon-cyan neon-border-cyan transition-all font-bold tracking-widest"
        >
          ← BACK
        </button>
        <h1 className="font-black text-neon-pink text-3xl tracking-widest flicker">
          CARD DECK
        </h1>
        <div className="text-neon-cyan text-xs font-mono tracking-widest opacity-60">
          {cardCount} DRAWN
        </div>
      </div>

      {/* 3D Card Container */}
      <div className="relative z-10 " style={{ perspective: '1200px' }}>
        <div
          onClick={getRandomQuestion}
          className="relative w-80 h-96 cursor-pointer"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
          }}
        >
          {/* Card Back - Initial State (Tapped blank side) */}
          <div
            className="absolute w-full h-full"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {/* Outer glow layer */}
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-30 rounded-3xl blur-lg"></div>

            {/* Card backing */}
            <div className="relative bg-gradient-to-br from-void-light via-upside-down to-void border-2 border-neon-cyan rounded-3xl p-8 h-full flex flex-col items-center justify-center shadow-2xl overflow-hidden">
              {/* Backing pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                  backgroundImage: 'linear-gradient(45deg, transparent 48%, #00f5ff 49%, #00f5ff 51%, transparent 52%)',
                  backgroundSize: '20px 20px',
                }}></div>
              </div>

              {/* Backing text */}
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4 animate-pulse">◆</div>
                <p className="text-neon-cyan font-black text-xl tracking-widest opacity-80">SEALED</p>
                <p className="text-neon-cyan/40 text-xs font-mono mt-2 tracking-widest">READY TO REVEAL</p>
              </div>

              {/* Corner accent marks */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-neon-pink"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-neon-pink"></div>
            </div>
          </div>

          {/* Card Front - Revealed State (Question side) */}
          <div
            className="absolute w-full h-full"
            style={{
              backfaceVisibility: 'hidden',
            }}
          >
            {/* Outer glow layer */}
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan opacity-40 rounded-3xl blur-lg"></div>

            {/* Main card */}
            <div className="relative bg-gradient-to-br from-void-light to-upside-down border-2 border-neon-pink rounded-3xl p-8 h-full flex flex-col items-center justify-center shadow-2xl neon-border overflow-hidden">
              {/* Scanline effect on card */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(0deg, rgba(255, 0, 110, 0.1) 1px, transparent 1px)',
                backgroundSize: '100% 4px',
                pointerEvents: 'none',
              }}></div>

              {/* Corner circuit accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-2 border-neon-cyan rounded opacity-60"></div>
              <div className="absolute top-3 right-3 w-6 h-6 border-2 border-neon-purple rounded opacity-60"></div>
              <div className="absolute bottom-3 left-3 w-6 h-6 border-2 border-neon-purple rounded opacity-60"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 border-2 border-neon-cyan rounded opacity-60"></div>

              {/* Question text */}
              <div className="relative z-10 text-center">
                {currentCard ? (
                  <>
                    <div className="text-neon-cyan text-xs font-mono tracking-widest mb-6 opacity-70 uppercase">▌ Question Unlocked ▌</div>
                    <p className="text-neon-pink font-black text-lg leading-relaxed mb-6">
                      {currentCard}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-neon-cyan text-xs font-mono opacity-50">
                      <span>→</span>
                      <span>TAP AGAIN FOR NEW CARD</span>
                      <span>←</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-6xl mb-4">✦</div>
                    <p className="text-neon-cyan font-black text-2xl tracking-widest mb-2">TAP THE CARD</p>
                    <p className="text-neon-cyan/60 text-sm font-mono">TO DRAW A QUESTION</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="relative z-10 mt-16 text-center max-w-xl">
        <div className="bg-void-light/40 backdrop-blur border border-neon-cyan/30 rounded-2xl p-4 border-l-2 border-l-neon-pink border-r-2 border-r-neon-purple">
          <p className="text-neon-cyan text-sm font-mono tracking-widest leading-relaxed">
            <span className="text-neon-pink">▌DECK MODE▌</span> Each player draws a random question.
            <br />
            <span className="text-neon-purple">Perfect for group icebreakers and social missions.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
