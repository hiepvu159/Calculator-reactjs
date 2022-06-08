import React from "react";
import { numberClick } from "../../../redux/calSlice";

function DigitButton({ dispatch, digit }) {
  return (
    <button
      className="bg-blue-500 h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border"
      onClick={() => dispatch(numberClick({ digit }))}
    >
      {digit}
    </button>
  );
}

export default DigitButton;
