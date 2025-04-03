import React from "react";
import NewGameButton from "./NewGameButton";

const PickNumber = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 grid-rows-3 w-[20rem] h-[20rem] gap-2">
        {[...Array(9)].map((_, i) => {
          return (
            <input
              key={i}
              type="button"
              className="bg-purple-200 text-blue-500 text-3xl flex justify-center items-center rounded-md hover:bg-purple-300"
              value={i}
            />
          );
        })}
      </div>
      <NewGameButton />
    </div>
  );
};

export default PickNumber;
