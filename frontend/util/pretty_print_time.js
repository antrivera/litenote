export const prettyPrintTime = time => {
  let currentTime = new Date();
  let lastUpdatedTime = new Date(time);
  let secondsDiff = Math.floor((currentTime - lastUpdatedTime) / 1000);
  let daysDiff = Math.floor(secondsDiff /  86400);

  if (daysDiff >= 30) {
    let numMonths = Math.floor(daysDiff / 30);
    return `${numMonths} ${numMonths > 1 ? "months" : "month"} ago`;
  } else if (daysDiff === 1) {
    return "Yesterday";
  } else if (daysDiff > 1 && daysDiff < 7) {
    return `${daysDiff} days ago`;
  } else if (daysDiff > 1 && daysDiff < 30) {
    let numWeeks = Math.floor(daysDiff / 7);
    return `${daysDiff} weeks ago`;
  }

  if (secondsDiff < 60) {
    return `Just now`;
  } else if (secondsDiff < 120) {
    return "1 minute ago";
  } else if (secondsDiff < 3600) {
    let numMinutes = Math.floor(secondsDiff / 60);
    return `${numMinutes} minutes ago`;
  } else if (secondsDiff < 7200) {
    return "1 hour ago";
  } else {
    let numHours = Math.floor(secondsDiff / 3600);
    return `${numHours} hours ago`;
  }
};
