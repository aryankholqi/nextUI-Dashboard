export default function convertTimestampsToDate(timestamp: string) {
  const date = new Date(Number(timestamp)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  return date;
}
