import dayjs from 'dayjs';

/**
 * Returns a string with the formatted date
 *
 * @param {string} date - Date string
 * @param {string} format - The date format
 * @returns {string} The formatted date
 */
const formatDate = (date, format = 'DD-MM-YYYY') => dayjs(date).format(format);

export default formatDate;
