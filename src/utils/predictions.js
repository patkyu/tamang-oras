export const getSmartSuggestion = (durationText, timeObj) => {
  const hour = timeObj.getHours();
  const durationMinutes = parseInt(durationText) || 0;

  if (durationMinutes > 60) return "Heavy traffic. Consider leaving later.";
  if (hour >= 7 && hour <= 9 && durationMinutes > 45) return "Rush hour – better to delay your trip.";
  if (durationMinutes < 30) return "Traffic is light. It's a good time to go!";
  return "Moderate traffic. Be prepared for delays.";
};
