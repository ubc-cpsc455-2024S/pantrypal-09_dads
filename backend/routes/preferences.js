const express = require("express");
const {
  getPreferences,
  setPreferences,
  getName,
  setName,
} = require("../controllers/preferenceController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all preference routes
router.use(requireAuth);

// GET user preferences
router.get("/", getPreferences);

// Set User Preferences
router.post("/set", setPreferences);

// GET user name
router.get("/name", getName);

// Set User name
router.post("/name/set", setName);

module.exports = router;
