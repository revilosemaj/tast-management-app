export const isUserLoggedIn = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem("token") !== null;
  }
  return false;
};
