export default function toLocaleDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month:"long",
    day:"2-digit"
  });
}
