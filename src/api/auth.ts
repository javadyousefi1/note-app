import axios from "./axios";
import { LoginFormType, SignUpFormType } from "@types";

export async function loginUser(userData: LoginFormType): Promise<any> {
  return axios.post(`auth/login`, userData, { withCredentials: true });
}

export async function checkAuth(): Promise<any> {
  return axios.get(`auth/checkAuth`, { withCredentials: true });
}

export async function registerUser(userData: SignUpFormType): Promise<any> {
  return axios.post(`auth/register`, userData);
}
