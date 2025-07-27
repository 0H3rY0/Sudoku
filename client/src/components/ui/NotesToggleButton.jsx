import { BsPencil } from "react-icons/bs";
import { useBoard } from "../../context/BoardContext";

const NotesToggleButton = () => {
  const { notesMode, setNotesMode } = useBoard();

  return (
    <div
      onClick={() => setNotesMode((prev) => !prev)}
      className={`relative w-14 h-14 flex items-center justify-center 
        bg-purple-200 rounded-full hover:bg-purple-300 cursor-pointer box-border
        ${
          notesMode ? "border-2 border-blue-500" : "border-2 border-transparent"
        }`}
    >
      <BsPencil size={32} />
      <div
        className={`absolute top-[-25%] left-[50%] bg-slate-300 w-10 h-8 
          rounded-full flex items-center justify-center 
          ${notesMode ? "text-white bg-blue-400" : ""}`}
      >
        {notesMode ? "ON" : "OFF"}
      </div>
    </div>
  );
};

export default NotesToggleButton;
