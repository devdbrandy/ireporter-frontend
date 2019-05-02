/**
 * Lookup coordinates to addresses
 *
 * @param {String} cordinates - The location cordinates
 * @returns {String} The reverse geocode address
 */
const lookupAddress = async (cordinates) => {
  const apiBase = 'https://maps.googleapis.com/maps/api/geocode';
  const response = await fetch(`${apiBase}/json?latlng=${cordinates}&key=${process.env.GOOGLE_API_TOKEN}`);
  const { results } = await response.json();
  const [place] = results;
  return place.formatted_address;
};

export default lookupAddress;
