import axios from "axios";
import axiosClient from "./interceptor";
import Cookies from "js-cookie";
import { store } from "../redux/store";
import { setCurrentUser } from "../redux/user";

export const authService = {
  async login(form) {
    const res = await axios.post(
      window.abp.appServiceUrl + "/auth/checkLogin",
      form
    );

    if (res.status === 200) {
      setAuthFromCookie(res.data.result);
    }
  },

  getUserByToken() {
    const auth = Cookies.get("Abp.AuthToken");

    if (!auth) {
      return undefined;
    }

    return axiosClient
      .post("/auth/checkToken", { token: auth })
      .then((response) => {
        store.dispatch(setCurrentUser(response));
      })
      .catch((error) => console.error(error));
  },

  logout() {
    Cookies.remove("Abp.AuthToken");
    authRedirect(true);
  },
};

function setAuthFromCookie(auth) {
  if (auth && auth.accessToken) {
    Cookies.set("Abp.AuthToken", auth.accessToken, 7);
    authRedirect();
  } else {
    window.location.href = "/auth/login";
  }
}

function authRedirect(logout = false) {
  window.location.href = logout ? "/auth/login" : "/";
}
