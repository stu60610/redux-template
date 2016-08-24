import { createTypes } from 'reduxsauce';

export const Types = createTypes(`
  STARTUP
`);


const startup = () => ({ type: Types.STARTUP });

export default {
  startup,
};
