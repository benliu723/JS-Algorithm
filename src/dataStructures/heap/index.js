// @flow
const parent = (i: number): number => Math.floor(i / 2);
const left = (i: number): number => 2 * i;
const right = (i: number): number => 2 * i + 1;

var a = 1;
console.log(a);

export { parent, left, right };
