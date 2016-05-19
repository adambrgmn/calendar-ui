/**
 * inRange
 * This function accepts a day (as moment-object) and
 * an array containing of to moment-objects.
 * The first object in the array is the start of the range,
 * the last one is the end.
 * It returns either false, if not in range, or the position
 * (first, between or last)
 *
 * @param  {Object}  day    A moment-object
 * @param  {Array}   range  An array of two moment-objects
 * @return {String/Bool}    Returns false or a string of placement
 */
export default function inRange(day, range) {
  if (!day || !range) return false;
  if (day.isSame(range[0], 'day') && day.isSame(range[1], 'day')) return 'only';
  if (day.isSame(range[0], 'day')) return 'first';
  if (day.isSame(range[1], 'day')) return 'last';
  if (day.isBetween(range[0], range[1], null, '[]')) return 'between';
  return false;
}
