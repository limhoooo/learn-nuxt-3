export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!!`,
      limho: '만세만세',
    },
  };
});
