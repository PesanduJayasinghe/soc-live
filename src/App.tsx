import { useBingoGame } from './hooks/useBingoGame';
import { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { ScavengerHuntScreen } from './components/ScavengerHuntScreen';
import { BingoModal } from './components/BingoModal';

type GameMode = 'select' | 'bingo' | 'scavenger';

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

  const handleModeSelect = (selectedMode: 'bingo' | 'scavenger') => {
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
