exports.checkToken = () => {
  //check if the user is already authorized
  const bearerHeader = req.headers["autorization"];
  if (typeof bearerHeader !== "undefined") {
    return true;
  }
};
