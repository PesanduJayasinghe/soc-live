import { useState } from 'react';

interface CardDeckScreenProps {
  questions: string[];
  onReset: () => void;
}

export function CardDeckScreen({ questions, onReset }: CardDeckScreenProps) {
  const [currentCard, setCurrentCard] = useState<string | null>(null);
  const [cardCount, setCardCount] = useState(0);

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentCard(questions[randomIndex]);
    setCardCount((prev) => prev + 1);
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

      {/* Card */}
      <div className="relative z-10">
        <div
          onClick={getRandomQuestion}
          className="relative w-80 h-96 cursor-pointer transform transition-all duration-300 hover:scale-105"
        >
          {/* Outer glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan opacity-25 rounded-3xl blur-lg hover:opacity-50 transition-opacity"></div>

          {/* Card */}
          <div className="relative bg-gradient-to-br from-void-light to-upside-down border-2 border-neon-cyan rounded-3xl p-8 neon-border-cyan h-full flex flex-col items-center justify-center text-center shadow-2xl">
            {currentCard ? (
              <>
                <div className="text-neon-cyan text-sm font-mono tracking-widest mb-4 opacity-60">QUESTION</div>
                <p className="text-neon-pink font-bold text-lg leading-relaxed">{currentCard}</p>
                <div className="mt-8 text-neon-cyan text-xs font-mono tracking-widest opacity-50">
                  TAP FOR NEW CARD
                </div>
              </>
            ) : (
              <>
                <div className="text-6xl mb-4">✦</div>
                <p className="text-neon-cyan font-black text-xl tracking-widest mb-2">TAP CARD</p>
                <p className="text-neon-cyan/60 text-sm font-mono">TO DRAW A QUESTION</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="relative z-10 mt-12 text-center max-w-xl">
        <div className="bg-void-light/40 backdrop-blur border-2 border-neon-cyan/30 rounded-2xl p-4">
          <p className="text-neon-cyan text-sm font-mono tracking-widest leading-relaxed">
            Each tap reveals a random question from the card deck.
            <br />
            <span className="text-neon-pink">Perfect for group icebreakers!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
