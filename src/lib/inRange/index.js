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
 * @param  {List}    range  An immutable List of two moment-objects
 * @return {String/Bool}    Returns false or a string of placement
 */
export default function inRange(day, range) {
  if (!range || !range.size > 0) return false;
  const rangeStart = range.get(0);
  const rangeEnd = range.get(1);
  if (day.isSame(rangeStart, 'day') && day.isSame(rangeEnd, 'day')) return 'only';
  if (day.isSame(rangeStart, 'day')) return 'first';
  if (day.isSame(rangeEnd, 'day')) return 'last';
  if (day.isBetween(rangeStart, rangeEnd, null, '[]')) return 'between';
  return false;
}
