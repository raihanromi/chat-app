const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword } = req.body;
  } catch (error) {
    console.log(error);
  }
};

const login = (req, res) => {
  console.log("loginUser");
};

const logout = (req, res) => {
  console.log("logoutUser");
};

module.exports = {
  signup,
  login,
  logout,
};
