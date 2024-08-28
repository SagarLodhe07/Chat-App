function formatSendMessageTime(isoString) {
  const date = new Date(isoString);

  const options = {
    year: "numeric",
    month: "short", // Use 'long' for full month name or 'numeric' for a number
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true, // Use 'false' for 24-hour time
  };
  return date.toLocaleString("en-US", options);
}

export default formatSendMessageTime;
