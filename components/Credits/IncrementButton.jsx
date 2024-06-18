import React, { useState } from "react";

const IncrementButton = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button
        onClick={incrementCount}
        className="bg-pink hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded pr-8"
      >
        Increase Credits
      </button>
      {count}
    </div>
  );
};

export default IncrementButton;
