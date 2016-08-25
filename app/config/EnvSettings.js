const SETTINGS = {
  useMockAPI: true,
  reduxLogConfig: {
    level: 'log',
    collapsed: (getState, action) => (action.type.includes('@@router/')),
  },
  env: ENV,
};

export default SETTINGS;
