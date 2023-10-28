const express = require("express");
const router = express.Router();
const Schema = require("../helper/schema")
const Validators = require("../helper/validation")

//configuration routes
const configurationController = require("../controller/admin/configuration")

router.post("/create-update-configuration",Validators.forReqBody(Schema.configurationSchema), configurationController.createUpdateConfiguration)
router.get("/all-configuration", configurationController.allConfiguration)

module.exports = router;

