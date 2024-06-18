const DisplayCards = ({ desc, title, left }) => {
  return (
    <div
      className={`flex flex-col items-center justify-around hover:scale-105 w-4/6 transition my-8 ${
        left ? "self-start" : "self-end"
      }`}
    >
      <div className="top-0 flex items-center justify-between px-6 bg-blue-600 text-white font-semibold w-full py-2">
        <div> {title} </div>
        {/* <div>
          <CircularGroup />
        </div> */}
      </div>
      <div className="px-4 py-2">{desc}</div>
      <hr className="h-0.5 w-full my-2 bg-gray-700 border-0" />
    </div>
  );
};

export default DisplayCards;
