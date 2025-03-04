import express from "express";
import { AddressController } from "../controllers/address.controller.js";
import { createAddressSchema, updateAddressSchema } from "../validators/address.validator.js";
import { validateRequest } from "../middlewares/validate.middleware.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

const router = express.Router();

router.get("/:id", AddressController.getAddressByUserId);
router.post("/", authenticate, validateRequest(createAddressSchema), AddressController.createAddress);
router.patch("/:id", validateRequest(updateAddressSchema), AddressController.updateAddress);

export default router;
