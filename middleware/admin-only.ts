// import { useAuthUser } from '~/composables/auth/useAuthUser';

export default defineNuxtRouteMiddleware(() => {
  // const isAdmin = useAuthUser();
  // const isAuthenticated = useAuthenticated();
  const authStore = useAuthStore();
  const { isAdmin, isAuthenticated } = storeToRefs(authStore);

  if (!isAuthenticated.value) {
    return navigateTo('/login');
  }
  if (!isAdmin.value) {
    return navigateTo('/');
  }
});
