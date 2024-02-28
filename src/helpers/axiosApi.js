import axios from "axios";
import { baseURL } from "../Constants";
const AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
  // timeout: 2000,
});

export const signUp = async (data) => {
  return await AxiosInstance.post("/signup", data).then((data) => data.data);
};

export const verifyOtp = async (data) => {
  return await AxiosInstance.post("/verify-otp", data).then(
    (data) => data.data
  );
};

export const loginAxios = async (data) => {
  return await AxiosInstance.post("/login", data).then((data) => data.data);
};
export const forgotPasswordAxios = async (data) => {
  return await AxiosInstance.post("/send-otp", data).then((data) => data.data);
};

export const changePasswordAxios = async (data) => {
  return await AxiosInstance.post("/change-password", data).then(
    (data) => data.data
  );
};
export const addCourseAxios = async (data) => {
  return await AxiosInstance.post("/dashboard/course", data).then(
    (data) => data.data
  );
};
export const addCourseByAuthorAxios = async (data) => {
  return await AxiosInstance.get("/dashboard/course", { params: data }).then(
    (data) => {
      return data.data || [];
    }
  );
};
export const getProfileAxios = async (data) => {
  return await AxiosInstance.get("/profile", { params: data }).then((data) => {
    return data.data;
  });
};
export const logoutAxios = async () => {
  return await AxiosInstance.post("/logout").then((data) => {
    localStorage.clear();
    return data.data;
  });
};

// AxiosInstance.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.code === 401 &&
//       originalRequest &&
//       !originalRequest._isRetry
//     ) {
//       originalRequest.isRetry = true;
//       try {
//         await axios.get(`${process.env.REACT_APP_API_URL}/api/node/refresh`, {
//           withCredentials: true,
//         });

//         return AxiosInstance.request(originalRequest);
//       } catch (err) {
//         console.log(err.message);
//       }
//     }
//     throw error;
//   }
// );
