import Notes from "./Notes";

const Cell = ({
  row,
  col,
  cell,
  isInitial,
  solvedValue,
  isSelected,
  isRelated,
  isSameValue,
  onClick,
}) => {
  const { value, notes } = cell;

  const getTextColor = () => {
    if (isInitial) return "text-black";
    if (value === 0) return "";
    return value === solvedValue ? "text-blue-600" : "text-red-600";
  };

  return (
    <div
      onClick={onClick}
      className={`relative flex items-center justify-center border text-xl font-bold cursor-pointer select-none
        ${col % 3 === 2 && col !== 8 ? "border-r-4" : ""}
        ${row % 3 === 2 && row !== 8 ? "border-b-4" : ""}
        ${isSelected ? "bg-yellow-200" : ""}
        ${!isSelected && isRelated ? "bg-blue-100" : ""}
        ${isSameValue ? "bg-green-200" : ""}
        ${getTextColor()}`}
    >
      {value !== 0 ? value : <Notes notes={notes} />}
    </div>
  );
};

export default Cell;
