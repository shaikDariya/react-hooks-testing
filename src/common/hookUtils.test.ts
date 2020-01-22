import React, { useRef } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { usePrevious } from "./hookUtils";

describe("Hook Utils", () => {
  describe("usePrevious", () => {
    it("Defaultly return undefined", () => {
      const { result, rerender } = renderHook(() => {
        return usePrevious(1);
      });
      expect(result.current).toBe(undefined);
      //Every rerender it returns previous value.
      rerender();
      expect(result.current).toBe(1);
    });
  });
});
