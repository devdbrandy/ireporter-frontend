/**
 * A wrapper for Console
 */
export const logger = console;

/**
 * Generate the fullname of a user resource
 *
 * @param {Object} user - User object
 * @returns {String} Fullname string
 */
export const getName = (user) => {
  if (user) {
    const { firstname, lastname } = user;
    return `${firstname} ${lastname}`;
  }
};

/**
 * Generate an overview of records
 *
 * @param {Array} records - List of records resources
 * @returns {Object} An overview of records
 */
export const generateOverview = (records) => {
  const overview = {
    total: records.length,
    draft: 0,
    published: 0,
    'under-investigation': 0,
    resolved: 0,
    rejected: 0,
  };

  if (records.length > 0) {
    records.forEach((record) => {
      const { status } = record;
      overview[status] += 1;
    });
  }
  localStorage.setItem('overview', JSON.stringify(overview));
  return overview;
};

/**
 * Fetche and display location to map
 *
 * @param {string} location - The location cordinates
 * @returns {void}
 */
export const mapLocation = (location) => {
  const [lat, lng] = location.split(',');
  const latLng = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };
  const mapContainer = document.getElementById('map');
  // eslint-disable-next-line no-unused-vars
  const map = new google.maps.Map(mapContainer, {
    center: latLng,
    zoom: 13,
  });
};
