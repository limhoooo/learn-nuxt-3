import { Notify } from 'quasar';
export default defineNuxtPlugin((nuxtApp) => {
  // 서버에러
  nuxtApp.hook('app:error', (err) => {
    if (err instanceof Error) {
      if (process.client) {
        Notify.create({
          message: err.message,
          type: 'warning',
        });
      }
    }
  });
  // 클라이언트 에러
  nuxtApp.hook('vue:error', (err) => {
    if (err instanceof Error) {
      if (process.client) {
        Notify.create({
          message: err.message,
          type: 'negative',
        });
      }
    }
  });
});
