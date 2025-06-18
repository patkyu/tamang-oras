export const fetchRealTimeTraffic = async (origin, destination) => {
  const API_KEY = 'XtonlyQVRljYFYONmRRNDXs3gF97tCkv'; // <-- Replace this

  // Convert place names to coordinates using TomTom Search API
  const getCoordinates = async (place) => {
    const searchUrl = `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(place)}.json?key=${API_KEY}`;
    const res = await fetch(searchUrl);
    const data = await res.json();
    const position = data.results?.[0]?.position;
    return position ? `${position.lat},${position.lon}` : null;
  };

  try {
    const [originCoords, destinationCoords] = await Promise.all([
      getCoordinates(origin),
      getCoordinates(destination),
    ]);

    if (!originCoords || !destinationCoords) {
      throw new Error("Failed to get coordinates.");
    }

    const routingUrl = `https://api.tomtom.com/routing/1/calculateRoute/${originCoords}:${destinationCoords}/json?traffic=true&key=${API_KEY}`;
    const routeRes = await fetch(routingUrl);
    const routeData = await routeRes.json();

    const trafficTime = routeData.routes?.[0]?.summary?.travelTimeInSeconds;
    const travelMinutes = Math.round(trafficTime / 60);

    return `${travelMinutes} minutes`;
  } catch (error) {
    console.error("TomTom API error:", error);
    return "Unavailable";
  }
};
