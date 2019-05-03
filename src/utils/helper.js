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
