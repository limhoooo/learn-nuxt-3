import type { UserWithoutPassword } from '~/types/user';

export const useAuth = () => {
  const { authUser } = useAuthUser();

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

  const setUser = (user: Maybe<UserWithoutPassword>) => (authUser.value = user);

  return {
    signIn,
    signOut,
  };
};
