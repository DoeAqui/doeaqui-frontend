import jwtDecode from "jwt-decode";
import http from "./httpService";

//const apiEndpoint = "http://apidev.doeaqui.net/api/auth";
const apiEndpoint = "https://localhost:5001/api/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  try {
    const response = await http.post(apiEndpoint, { email, password });
    console.log(response);
    localStorage.setItem(tokenKey, response.data.data.access_token);
    return response.data;
  } catch (ex) {
    return ex.response.data;
  }
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
  getJwt
};
