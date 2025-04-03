const MainTemplate = ({ children }) => {
  return (
    <div className="w-full h-[100vh] bg-slate-100 flex justify-center items-center gap-5">
      {children}
    </div>
  );
};

export default MainTemplate;
