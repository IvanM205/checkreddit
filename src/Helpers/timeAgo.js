export function timeAgo(unixTime) {
  const now = Math.floor(Date.now() / 1000); // current time in seconds
  const secondsAgo = now - unixTime;

  const units = [
    { name: "year", seconds: 31536000 },
    { name: "month", seconds: 2592000 },
    { name: "day", seconds: 86400 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  for (let unit of units) {
    const value = Math.floor(secondsAgo / unit.seconds);
    if (value >= 1) {
      return `${value} ${unit.name}${value > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
