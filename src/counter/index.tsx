import React, { useState } from "react";
import { usePrevious } from "./../common/hookUtils";
export const Counter = () => {
  const [value, setValue] = useState(0);
  const lastValue = usePrevious(value);

  return (
    <div>
      <p>
        Current: {value} - Previous: {lastValue}
      </p>
      <button onClick={() => setValue(value + Math.round(Math.random() * 10))}>
        Random Increment
      </button>
    </div>
  );
};
