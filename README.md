# react-hooks-testing
 
 ```
 export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

TDD with "@testing-library/react-hooks".

it("Rerender returns previous value 1", () => {
    const { result, rerender } = renderHook(() => {
      return usePrevious(1);
    });
    expect(result.current).toBe(undefined);
    //Every rerender it returns previous value.
    rerender();
    expect(result.current).toBe(1);
 });
 
 ```
