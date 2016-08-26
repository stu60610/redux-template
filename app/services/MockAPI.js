import repoData from './mock/getRepos';

export default {
  getRepos: () => ({
    ok: true,
    data: repoData,
  }),

};
