export const getNameFromUrl = url => {
  const paths = url.split('/');
  const lastPath = paths[paths.length - 1];
  return lastPath;
};
