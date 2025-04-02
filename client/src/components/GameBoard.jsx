const GameBoard = () => {
  return (
    <div className="w-[30rem] h-[30rem] border-4 border-black">
      <div className="grid grid-cols-9 grid-rows-9 h-full w-full">
        {[...Array(81)].map((_, i) => {
          const row = Math.floor(i / 9);
          const col = i % 9;

          return (
            <div
              key={i}
              className={`flex items-center justify-center border border-gray-400 text-xl font-bold w-full h-full
              ${col % 3 === 2 && col !== 8 ? "border-r-4 border-black" : ""} 
              ${row % 3 === 2 && row !== 8 ? "border-b-4 border-black" : ""}
              `}
            >
              {/* Tu wstawisz cyfry */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;
