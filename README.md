# Домашнее задание ШРИ по теме "Асинхронность"

Вам дан асинхронный API, реализующий арифметические действия, операции сравнения и операции над элементами массива. Каждый метод API последним аргументом принимает callback, который будет вызван после окончания асинхронного действия. В файле [example.html](example.html) можно посмотреть примеры использования.

## Задания

Нужно написать функцию, которая реализует задание вашего варианта. Массивами, математическими операциями и операциями сравнения пользоватсья нельзя. Код нужно разместить на отдельной страничке и выложить её на GitHub Pages.

### Вариант 1

**Задание:** найти максимальный элемент в массиве.

```ts
function(array: AsyncArray, cb: (result: Number) => void) {

}
```

### Вариант 2

**Задание:** найти среднее арифметическое.

```ts
function(array: AsyncArray, cb: (result: Number) => void) {

}
```

### Вариант 3

**Задание:** [сложение векторов](http://www.math24.ru/сложение-и-вычитание-векторов.html).

```ts
function(v1: AsyncArray, v2: AsyncArray, cb: (result: AsyncArray) => void) {

}
```

### Вариант 4

**Задание:** посчитать площадь треугольника.

```ts
function(x1: Number, y1: Number, x2: Number, y2: Number, x3: Number, y3: Number,
    cb: (result: Number) => void) {

}
```

### Вариант 5

**Задание:** решить [квадратное уравнение](https://school-assistant.ru/?predmet=algebra&theme=kvadratnie_uravnenija). Квадратное уравнение — уравнение вида `ax² + bx + c = 0`, где `a`, `b`, `c` — некоторые числа (a ≠ 0), `x` — неизвестное.

```ts
function(a: Number, b: Number, c: Number, cb: (result1?: Number, result2?: Number) => void) {

}
```

### Вариант 6

**Задание:** посчитать сумму всех нечетных чисел в массиве.

```ts
function(array: AsyncArray, cb: (result: Number) => void) {

}
```

### Вариант 7

**Задание:** посчитать сумму элементов массива с четными индексами.

```ts
function(array: AsyncArray, cb: (result: Number) => void) {

}
```

### Вариант 8

**Задание:** реализовать операцию [map](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Map) для асинхронного массива.

```ts
function map(
    array: AsyncArray,
    fn: (cur: any, idx: Number, src: AsyncArray) => any,
    cb: (result: AsyncArray) => void) {

}
```

### Вариант 9

**Задание:** реализовать операцию [reduce](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) для асинхронного массива.

```ts
function reduce(
    array: AsyncArray,
    fn: (acc: any, cur: any, idx: Number, src: AsyncArray) => any,
    cb: (result: any) => void) {

}
```

### Вариант 10

**Задание:** реализовать операцию [filter](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter) для асинхронного массива.

```ts
function map(
    array: AsyncArray,
    fn: (cur: any, idx: Number, src: AsyncArray) => Boolean,
    cb: (result: AsyncArray) => void) {

}
```

## Бонусное задание

Реализовать в отдельном файле собственную версию методов:

- [Promise.any](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)
- [Promise.allSettled](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
- [Promise.prototype.finally](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

```js
Promise._any = // реализация
Promise._allSettled = // реализация
Promise.prototype._finally = // реализация
```
