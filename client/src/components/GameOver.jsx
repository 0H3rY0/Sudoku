import NewGameButton from "./NewGameButton";

const GameOver = () => {
  return (
    <div className="shadow-lg p-10 flex justify-center flex-col text-center rounded-md">
      <h3 className="text-slate-700 text-2xl font-bold">Game Over!</h3>
      <p className="text-lg text-slate-600 mb-3 ">
        you lose because of 3 mistakes
      </p>
      <NewGameButton />
    </div>
  );
};

export default GameOver;
