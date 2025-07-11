import { createContext, useContext } from "react";

const BoardContext = createContext();
export const useBoard = () => useContext(BoardContext);
export default BoardContext;
