const MainTemplate = ({ children }) => {
  return (
    <div className="w-full h-[100vh] bg-red-300 flex justify-center items-center">
      {children}
    </div>
  );
};

export default MainTemplate;
