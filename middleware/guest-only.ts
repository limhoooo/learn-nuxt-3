export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useAuthUser();
  if (isAuthenticated.value) {
    // 네비게이션 탐색취소
    if (process.server) return navigateTo('/');
    return abortNavigation();
  }
});
