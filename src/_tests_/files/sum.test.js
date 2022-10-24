//Файл для тестрирования
//Здесь записан сам тест

const multiply = require('../../files/sum');


//в скобках строка с названием теста

xdescribe (
" Mutual test", () => {

 it ('multiply 1 * 0 to equal 0', () => {
  expect(multiply(1, 0)).toBe(0);
});

it ('multiply 1 * 1 to equal 1', () => {
  expect(multiply(1, 1)).toBe(1);
});

}
)