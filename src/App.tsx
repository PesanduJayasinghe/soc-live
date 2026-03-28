import { useBingoGame } from './hooks/useBingoGame';
import { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { ScavengerHuntScreen } from './components/ScavengerHuntScreen';
import { CardDeckScreen } from './components/CardDeckScreen';
import { BingoModal } from './components/BingoModal';

type GameMode = 'select' | 'bingo' | 'scavenger' | 'card-deck';

function App() {
  const [mode, setMode] = useState<GameMode>('select');
  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  const handleModeSelect = (selectedMode: 'bingo' | 'scavenger' | 'card-deck') => {
    setMode(selectedMode);
    if (selectedMode === 'bingo') {
      startGame();
    }
  };

  const handleBack = () => {
    resetGame();
    setMode('select');
  };

  if (mode === 'select') {
    return <StartScreen onSelectMode={handleModeSelect} />;
  }

  if (mode === 'scavenger') {
    return (
      <ScavengerHuntScreen
        items={board}
        markedItems={new Set(board.filter(b => b.isMarked).map(b => b.id))}
        onItemMark={(id) => handleSquareClick(id)}
        onReset={handleBack}
      />
    );
  }

  if (mode === 'card-deck') {
    return (
      <CardDeckScreen
        questions={board.map(b => b.text)}
        onReset={handleBack}
      />
    );
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={handleBack}
      />
      {showBingoModal && (
        <BingoModal onDismiss={dismissModal} />
      )}
    </>
  );
}

export default App;
