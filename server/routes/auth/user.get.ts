export default defineEventHandler((e) => {
  const userJsonString = getCookie(e, '__user');

  if (!userJsonString) {
    return { user: null };
  }

  const user = JSON.parse(userJsonString);
  return { user };
});
