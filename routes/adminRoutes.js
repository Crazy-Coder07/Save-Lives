const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//Routes

//GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddelware,
  adminMiddleware,
  getDonarsListController
);

// donar count use only to display on home screen
router.get(
  "/donar-list-withoutadmin",
  getDonarsListController
);

//GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddelware,
  adminMiddleware,
  getHospitalListController
);

// hospital use only to display on home screen
router.get(
  "/hospital-list-withoutadmin",
  getHospitalListController
);

//GET || ORG LIST
router.get("/org-list", authMiddelware, adminMiddleware, getOrgListController);

// org count use only to display on home screen
router.get(
  "/org-list-withoutadmin",
  getOrgListController
);


// ==========================

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  authMiddelware,
  adminMiddleware,
  deleteDonarController
);

//EXPORT
module.exports = router;
