export const SETTINGS = {
  useMockAPI: false,
  reduxLogConfig: {
    level: 'log',
    collapsed: (getState, action) => (action.type.includes('@@router/')),
  },
  env: ENV,
  apiBaseURL: API_HOST,
};

export default SETTINGS;
