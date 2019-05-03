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
  const { firstname, lastname } = user;
  return `${firstname} ${lastname}`;
};
