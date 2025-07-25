import GameOptionsModal from "./modals/GameLevelsModal";

const NewGameButton = () => {
  return (
    <GameOptionsModal>
      <button className="w-full h-16 text-white bg-blue-900 rounded-md font-extrabold hover:bg-blue-950">
        New Game
      </button>
    </GameOptionsModal>
  );
};

export default NewGameButton;
