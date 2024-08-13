const postCreateController = async (req, res) => {
  try {
    res.status(200).send({ message: "New Post" });
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

module.exports = postCreateController;
