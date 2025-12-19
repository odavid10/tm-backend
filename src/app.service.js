const appService = (req, res) => {
  res.status(200).send("API REST Task Manager");
};

module.exports = {
  appService,
};
