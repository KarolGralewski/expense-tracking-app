const { User } = require('../models/user');

module.exports = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate({ _id: req.decoded }, { $set: { email: req.body.email } }, { new: true });

    if (updatedUser) {
      return res.status(200).json({ message: 'Email updated successfully' });
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
