const Notes = ({ notes }) => {
  return (
    <div className="absolute inset-1 grid grid-cols-3 text-xs text-gray-500">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <div key={n} className={notes.includes(n) ? "" : "invisible"}>
          {n}
        </div>
      ))}
    </div>
  );
};

export default Notes;
