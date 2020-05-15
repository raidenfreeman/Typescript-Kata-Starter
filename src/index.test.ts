import { sum, Sum } from "./index";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Mock/spy example", () => {
  const spy = jest.fn();
  const usecase = new Sum(spy);
  usecase.Execute(5,6);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toBeCalledWith(5,6);
});


