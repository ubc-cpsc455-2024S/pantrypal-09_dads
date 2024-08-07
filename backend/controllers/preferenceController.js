require("dotenv").config();
const User = require("../models/userModel");
const mongoose = require("mongoose");

const getPreferences = async (req, res) => {
  const user_uuid = req.user._id;

  if (!mongoose.Types.ObjectId.isValid(user_uuid)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findById(user_uuid);

  if (!user) {
    return res.status(404).json({ error: "User not Found" });
  }

  res.status(200).json({ preferences: user.dietary_preferences });
};

const setPreferences = async (req, res) => {
  const user_uuid = req.user._id;
  const { preferences } = req.body;

  if (!mongoose.Types.ObjectId.isValid(user_uuid)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findById(user_uuid);

  if (!user) {
    return res.status(404).json({ error: "User not Found" });
  }

  await User.findOneAndUpdate(
    { _id: user_uuid },
    { $set: { dietary_preferences: preferences } },
  );

  const user2 = await User.findById(user_uuid);

  res.status(200).json({ preferences: user2.dietary_preferences });
};

const getName = async (req, res) => {
  const user_uuid = req.user._id;

  if (!mongoose.Types.ObjectId.isValid(user_uuid)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findById(user_uuid);

  if (!user) {
    return res.status(404).json({ error: "User not Found" });
  }

  res.status(200).json({ name: user.name });
};

const setName = async (req, res) => {
  const user_uuid = req.user._id;
  const { name } = req.body;

  if (!mongoose.Types.ObjectId.isValid(user_uuid)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findById(user_uuid);

  if (!user) {
    return res.status(404).json({ error: "User not Found" });
  }

  await User.findOneAndUpdate({ _id: user_uuid }, { $set: { name: name } });

  const user2 = await User.findById(user_uuid);

  res.status(200).json({ name: user2.name });
};

module.exports = {
  getPreferences,
  setPreferences,
  setName,
  getName,
};
