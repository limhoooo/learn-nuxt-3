export default eventHandler(() => {
  // return 'Hello Nuxt3!';
  throw createError({
    statusCode: 404,
    statusMessage: 'not found',
    // fatal: true,
  });
});
