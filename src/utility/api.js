export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      if (username === "biplav@basobaas.com" && password === "12345") {
        return resolve({ status: 200 });
      }
      return reject({ success: 404 });
    }, 2000);
  });
};
