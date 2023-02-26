import axios from 'axios';
const authURL = 'http://www.localhost:3001/api';

export const adminLogin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/login`, {
      account,
      password
    });
    const { token } = data.data
    const { role } = data.data.user
    if (token && role === 'admin') {
      return { success: true, ...data }
    }
    return data;
  } catch (err) {
    console.log("[Admin Login Failed]:", err.response.data);
  };
};