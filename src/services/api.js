import axios from "axios";

axios.defaults.validateStatus = status => {
  return status >= 200 && status <= 500;
};

axios.defaults.timeout = 20000;

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["accept"] = "application/json";

/*
  Use axios interceptors to configure headers, show response error messages etc.
*/
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response !== undefined) {
      alert(error);
    }
    return Promise.reject(error);
  }
);

export function configureAPI() {
  axios.defaults.headers.post["crossDomain"] = true;

}



export function postData(url,header, body) {
  return axios.post(url,header, body);
}

export function putData(url, header, body) {
  return axios.put(url, header, body);
}
export function deleteData(url, body) {
  return axios.delete(url, body);
}

export function getData(url, body) {
  return axios.get(url,  body);
}