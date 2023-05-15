import bcrypt from 'bcrypt';
import { pool } from '../db';
import { createError } from '../helpers/error';

// bcrypt.hash('<password>', 10, function (err, hash) {
//   console.log(hash);
// });

export const authenticateUser = async (body) => {
  try {
    const { rows: data } = await pool.query(
      `SELECT * 
       FROM user_account
       WHERE username = $1`,
      [body.username],
    );

    const { password, ...user } = data[0];

    const isValidUser = await bcrypt.compare(body.password, password);

    if (!isValidUser) {
      throw createError(401);
    }

    return { user };
  } catch (error) {
    error.status = error.status || 500;
    return { error };
  }
};
