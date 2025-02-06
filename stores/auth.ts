// import { getUser } from '~/composables/auth/usersData';
import type { UserWithoutPassword } from '~/types/user';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref<Maybe<UserWithoutPassword>>();

    const signIn = async (email: string, password: string) => {
      const data = await $fetch<{ user: UserWithoutPassword }>('/auth/login', {
        method: 'POST',
        body: {
          email,
          password,
        },
      });
      // const foundUser = getUser(email, password);
      const { user: foundUser } = data;

      if (!foundUser) {
        throw createError({
          statusCode: 401,
          statusMessage: '아이디 또는 비밀번호가 없습니다.',
        });
      }

      setUser(foundUser);
    };
    const signOut = async () => {
      await $fetch('/auth/logout', {
        method: 'POST',
      });
    };

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
