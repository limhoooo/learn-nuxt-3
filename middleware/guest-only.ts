export default defineNuxtRouteMiddleware(() => {
  // const isAuthenticated = useAuthenticated();
  const { isAuthenticated } = storeToRefs(useAuthStore());

  if (isAuthenticated.value) {
    if (process.server) return navigateTo('/');
    // 네비게이션 탐색취소
    return abortNavigation();
  }
});
