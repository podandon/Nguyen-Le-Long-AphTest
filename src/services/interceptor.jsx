import { notification } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1800000,
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token != null) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response?.data?.result?.messageSuccess) {
      notification.success({
        message: "Thành công",
        description: response?.data?.result?.messageSuccess,
        placement: "bottomRight",
      });
    }
    return response.data.result;
  },
  (error) => {
    if (
      typeof error.response !== "undefined" &&
      typeof error.response.config !== "undefined" &&
      typeof error.response.config.url !== "undefined"
    ) {
      var arrPath = error.response.config.url.split("/");
      if (arrPath.length > 0 && arrPath[arrPath.length - 1] === "checkToken") {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href =
          window.abp.appWebUrl + "?urlReturn=" + window.abp.appBaseUrl;
      }
    }

    if (
      !!error.response &&
      !!error.response.data.error &&
      !!error.response.data.error.message &&
      error.response.data.error.details
    ) {
      notification.error({
        message: error.response.data.error.message,
        description: error.response.data.error.details,
        placement: "bottomRight",
      });
    } else if (
      !!error.response &&
      !!error.response.data.error &&
      !!error.response.data.error.message
    ) {
      notification.error({
        message: "Lỗi",
        description: error.response.data.error.message,
        placement: "bottomRight",
      });
    } else if (!error.response) {
      notification.error({
        message: "Lỗi",
        description: "Lỗi kết nối",
        placement: "bottomRight",
      });
    }

    if (!!error.response && error.response.status === 401) {
      notification.error({
        message: "Lỗi",
        description: error.response.data.message,
        placement: "bottomRight",
      });
    }

    if (error && error.response && error.response.data) {
      throw error.response.data;
    }
    throw error;
  }
);

function getToken() {
  const itemStr = Cookies.get("Abp.AuthToken");
  if (!itemStr) {
    return null;
  } else {
    return itemStr;
  }
}

export default axiosClient;
