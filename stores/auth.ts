import { getUser } from '~/composables/auth/usersData';
import type { UserWithoutPassword } from '~/types/user';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref<Maybe<UserWithoutPassword>>();

    const signIn = (email: string, password: string) => {
      const foundUser = getUser(email, password);

      if (!foundUser) {
        throw createError({
          statusCode: 401,
          statusMessage: '아이디 또는 비밀번호가 없습니다.',
        });
      }

      setUser(foundUser);
    };
    const signOut = () => setUser(null);

    const setUser = (user: Maybe<UserWithoutPassword>) =>
      (authUser.value = user);
    return {
      user: authUser,
      isAuthenticated: computed(() => !!authUser.value),
      isAdmin: computed(() =>
        !authUser.value ? false : authUser.value.roles.includes('ADMIN'),
      ),
      signIn,
      signOut,
    };
  },
  {
    persist: {
      storage: persistedState.cookies,
    },
  },
);
