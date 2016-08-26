import { createTypes } from 'reduxsauce';

export const Types = createTypes(`
  GET_REPO_REQUEST
  GET_REPO_SUCCESS
  GET_REPO_FAILURE
`);


const getRepoRequest = (userName) => ({ type: Types.GET_REPO_REQUEST, userName });

const getRepoSuccess = (repoData) => ({ type: Types.GET_REPO_SUCCESS, repoData });

const getRepoFailure = (errorCode) => ({ type: Types.GET_REPO_FAILURE, errorCode });


export {
  getRepoRequest,
  getRepoSuccess,
  getRepoFailure,
};
