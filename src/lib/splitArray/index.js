/**
 * Split an array into smaller pieces defined
 * by size. The last array will be as long
 * as there ar elements left in the original
 * array.
 * @param  {Array}  arr   Arra to split
 * @param  {Num}    size  Size of new arrays
 * @return {Array}        Array containing splitted arrays
 */
export default function splitArray(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0) {
      newArr.push(arr.slice(i, i + size));
    }
  }

  return newArr;
}
