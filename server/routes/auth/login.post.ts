// auth/login

import { getUserByEmail } from '~/server/models/user';

export default defineEventHandler(async (e) => {
  const body = readBody<{ email: string; password: string }>(e);

  const { email, password } = await body;

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: '아이디 또는 비밀번호가 없습니다',
    });
  }

  const userWithPassword = getUserByEmail(email);
  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: '일치하는 아이디 또는 비밀번호가 없습니다',
    });
  }

  const verified = verifyPassword(password, userWithPassword.password);
  if (!verified) {
    throw createError({
      statusCode: 401,
      statusMessage: '일치하는 아이디 또는 비밀번호가 없습니다',
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...userWithoutPassword } = userWithPassword;

  setCookie(e, '__user', JSON.stringify(userWithoutPassword));

  return { user: userWithoutPassword };
});
