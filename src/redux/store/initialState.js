export default {
  auth: {
    user: {},
    isAuthenticated: false,
    token: '',
    isLoading: false,
    errors: [],
  },
  common: {
    appName: '',
    isLoading: false,
    error: [],
  },
  records: {
    userRecords: [],
    records: [],
    record: {},
    overview: {
      total: 0,
      'under-investigation': 0,
      resolved: 0,
      rejected: 0,
    }
  },
};
