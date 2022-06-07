import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  return (
    <div className="bg-neutral-700 w-72 p-3">
      <div className="out-put">
        <input
          className="w-full h-14 text-right"
          type="text"
          value={result}
        ></input>
      </div>
      <div className="h-auto grid grid-cols-4 grid-cols-4 ">
        <button
          onClick={handleClick}
          className="bg-red-500 h-16 col-span-2 hover:bg-red-700 text-white font-bold py-2 px-4 border"
        >
          AC
        </button>
        <button
          name="/"
          onClick={handleClick}
          className="bg-blue-500 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
        >
          /
        </button>
        <button
          name="x"
          onClick={handleClick}
          className="bg-blue-500 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
        >
          x
        </button>
        <button
          name="7"
          onClick={handleClick}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          7
        </button>
        <button
          name="8"
          onClick={handleClick}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          8
        </button>
        <button
          name="9"
          onClick={handleClick}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          9
        </button>
        <button
          name="+"
          onClick={handleClick}
          className="bg-blue-500 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
        >
          +
        </button>
        <button
          name="6"
          onClick={handleClick}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          6
        </button>
        <button
          name="5"
          onClick={handleClick}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          5
        </button>
        <button
          name="4"
          onClick={handleClick}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          4
        </button>
        <button
          name="-"
          onClick={handleClick}
          className="bg-blue-500 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
        >
          -
        </button>
        <button
          name="3"
          onClick={handleClick}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          3
        </button>
        <button
          name="2"
          onClick={handleClick}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          2
        </button>
        <button
          name="1"
          onClick={handleClick}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          1
        </button>
        <button
          onClick={handleClick}
          className="bg-blue-500 h-32 row-span-2 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
        >
          =
        </button>
        <button
          name="0"
          onClick={handleClick}
          className="bg-stone-500 h-16 col-span-2 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          0
        </button>
        <button
          name="."
          onClick={handleClick}
          className="bg-blue-500 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
        >
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;
