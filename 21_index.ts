/*Problem Description: N Tables + 1

Create a function that takes a number n and
returns the first 10 multiples of n with 1 added to it,
separated by commas.

Examples
-nTablesPlusOne(7) ➞ "8,15,22,29,36,43,50,57,64,71"
-nTablesPlusOne(1) ➞ "2,3,4,5,6,7,8,9,10,11"
-nTablesPlusOne(3) ➞ "4,7,10,13,16,19,22,25,28,31"
 */

export function nTablesPlusOne(n:number):string{
  let str = ``;

  for (let i = 1; i <= 10; i++)
    {
     str += `${n * i + 1}`;
     if (i !== 10) str += `,`;
    }
  
  return str;
}

console.log(nTablesPlusOne(1) === "2,3,4,5,6,7,8,9,10,11")
console.log(nTablesPlusOne(7) === "8,15,22,29,36,43,50,57,64,71")
console.log(nTablesPlusOne(134) === "135,269,403,537,671,805,939,1073,1207,1341")
