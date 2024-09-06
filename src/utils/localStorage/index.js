export function SaveUserDeatilsLocalStorage(token) {
  window.localStorage.setItem("userToken", token);
}

export function getUserDetails() {
  return window.localStorage.getItem("userDetails");
}

export function getToken() {
  return window.localStorage.getItem("userToken");
}
export function getToken2() {
  return window.localStorage.getItem("userToken");
}
export function removeItemFromLocalStorage(key) {
  return window.localStorage.removeItem(key);
}
