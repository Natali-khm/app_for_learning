import { mult, sum } from "./01";

let a: number;
let b: number;
let c: number;

// тестовая среда, перед тем как ты будешь запускать тест
beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
});

// (пишем что тестируем что должно произойти, функция-тест)
test("should return correct number value", () => {
  // чтобы тестировать поведение необходимы данные
  a=100

  //action
  const result_1 = sum(a, b);
  const result_2 = sum(a, c);

  //expect result
  expect(result_1).toBe(102);
  expect(result_2).toBe(103);
});

test("multiplication should be correct", () => {

  const result_1 = mult(a, b);
  const result_2 = mult(b, c);

  expect(result_1).toBe(2);
  expect(result_2).toBe(6);
});

export {};
