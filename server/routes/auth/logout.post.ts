export default defineEventHandler((e) => {
  deleteCookie(e, '__user');
  return {
    user: null,
  };
});
