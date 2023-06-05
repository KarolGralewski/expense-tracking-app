const { User } = require('../models/user');

module.exports = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.decoded });
    if (deletedUser) {
      return res.status(200).json({ message: 'User deleted successfully' });
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
