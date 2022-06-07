import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberClick } from "../../redux/calSlice";

function Calculator() {
  const dispatch = useDispatch();
  let newState = useSelector((state) => {
    return state;
  });
  return (
    <div className="bg-neutral-700 w-72 p-3">
      <div className="out-put">
        <input
          className="w-full h-14 text-right"
          type="text"
          value={newState.output}
        ></input>
      </div>
      <div className="h-auto grid grid-cols-4 grid-cols-4 ">
        <button
          // onClick={() => dispatch(numberClick())}
          className="bg-red-500 h-16 col-span-2 hover:bg-red-700 text-white font-bold py-2 px-4 border"
        >
          AC
        </button>
        <button
          name="/"
          onClick={() => dispatch(numberClick("/"))}
          className="bg-blue-500 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
        >
          /
        </button>
        <button
          name="x"
          onClick={() => dispatch(numberClick("*"))}
          className="bg-blue-500 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
        >
          x
        </button>
        <button
          name="7"
          onClick={() => dispatch(numberClick("7"))}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          7
        </button>
        <button
          name="8"
          onClick={() => dispatch(numberClick("8"))}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          8
        </button>
        <button
          name="9"
          onClick={() => dispatch(numberClick("9"))}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          9
        </button>
        <button
          name="+"
          onClick={() => dispatch(numberClick("+"))}
          className="bg-blue-500 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
        >
          +
        </button>
        <button
          name="6"
          onClick={() => dispatch(numberClick("6"))}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          6
        </button>
        <button
          name="5"
          onClick={() => dispatch(numberClick("5"))}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          5
        </button>
        <button
          name="4"
          onClick={() => dispatch(numberClick("4"))}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          4
        </button>
        <button
          name="-"
          onClick={() => dispatch(numberClick("-"))}
          className="bg-blue-500 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
        >
          -
        </button>
        <button
          name="3"
          onClick={() => dispatch(numberClick("3"))}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          3
        </button>
        <button
          name="2"
          onClick={() => dispatch(numberClick("2"))}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          2
        </button>
        <button
          name="1"
          onClick={() => dispatch(numberClick("1"))}
          className="bg-stone-500 h-16 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          1
        </button>
        <button
          onClick={() => dispatch(numberClick())}
          className="bg-blue-500 h-32c row-span-2 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
        >
          =
        </button>
        <button
          name="0"
          onClick={() => dispatch(numberClick("0"))}
          className="bg-stone-500 h-16 col-span-2 hover:bg-stone-700 text-white font-bold py-2 px-4 border"
        >
          0
        </button>
        <button
          name="."
          onClick={() => dispatch(numberClick("."))}
          className="bg-blue-500 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
        >
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;
