const OptionButton = ({ onClick, icon }) => {
  return (
    <div
      onClick={onClick}
      className="w-14 h-14 flex items-center justify-center 
        bg-purple-200 rounded-full hover:bg-purple-300 cursor-pointer"
    >
      {icon}
    </div>
  );
};

export default OptionButton;
