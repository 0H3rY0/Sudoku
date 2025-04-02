const GameBoard = () => {
  return (
    <div className="w-[30rem] h-[30rem] border-4 border-gray-500">
      <div className="grid grid-cols-9 grid-rows-9 h-full w-full">
        {[...Array(81)].map((_, i) => (
          <div
            key={i}
            className={`flex items-center justify-center border border-gray-400 text-xl font-bold w-full h-full
            ${i % 9 === 2 || i % 9 === 5 ? "border-r-2 border-black" : ""}
            ${
              Math.floor(i / 9) === 2 || Math.floor(i / 9) === 5
                ? "border-b-2 border-black"
                : ""
            }`}
          >
            {/* Tu wstawisz cyfry */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
