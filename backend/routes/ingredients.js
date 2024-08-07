const express = require("express");
const multer = require("multer");
const {
  getIngredients,
  updateIngredients,
  generateIngredients,
} = require("../controllers/ingredientController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Enable Authorization
router.use(requireAuth);

// GET all ingredients
router.get("/", getIngredients);

// POST a new ingredients list
router.post("/update", updateIngredients);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Image Multer and Ingredient Generation Route
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const imageUploadPath = "./temp";

//Image Uploader
const imageUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, imageUploadPath);
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`);
    },
  }),
});

router.post("/generate", imageUpload.array("image_file"), generateIngredients);

module.exports = router;
