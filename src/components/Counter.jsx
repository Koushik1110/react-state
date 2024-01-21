import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = (value) => {
    count - value < 0 ? null : setCount(count - value);
  };

  const handleIncrease = (value) => {
    count + value > 50 ? null : setCount(count + value);
  };

  return (
    <div>
      <p className="text-2xl font-semibold">Count: {count}</p>
      <div className="flex items-center gap-5">
        <button
          onClick={() => handleDecrease(5)}
          className="bg-black text-white px-5 py-2.5 rounded-xl active:bg-black/80 transition"
        >
          Decrease 5
        </button>
        <button
          onClick={() => handleDecrease(1)}
          className="bg-black text-white px-5 py-2.5 rounded-xl active:bg-black/80 transition"
        >
          Decrease 1
        </button>
        <button
          onClick={() => handleIncrease(1)}
          className="bg-black text-white px-5 py-2.5 rounded-xl active:bg-black/80 transition"
        >
          Increase 1
        </button>
        <button
          onClick={() => handleIncrease(5)}
          className="bg-black text-white px-5 py-2.5 rounded-xl active:bg-black/80 transition"
        >
          Increase 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
