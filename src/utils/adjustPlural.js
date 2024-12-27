export default function adjustPlural(
  number,
  singular = "item",
  plural = "items"
) {
  return number <= 1 ? singular : plural;
}
