import { Request, Response } from "express";
import { handleError } from "../utils/handleError.js";
import { AddressService } from "../service/address.service.js";

export class AddressController {
  static async getAddressByUserId(req: Request, res: Response) {
    try {
      const address = await AddressService.getAddressByUserId(Number(req.params.id));
      if (!address) {
        return handleError(res, new Error("Address not found"), 404);
      }
      res.status(200).json({ success: true, data: address });
    } catch (error) {
      handleError(res, error);
    }
  }

  static async createAddress(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user.id;
      if (!userId) {
        res.status(400).json({ success: false, message: "User ID not found" });
        return;
      }

      const addressData = { ...req.body, user_id: userId };
      
      const address = await AddressService.createAddress(addressData);
      res.status(201).json({ success: true, data: address });
    } catch (error) {
      handleError(res, error);
    }
  }

  static async updateAddress(req: Request, res: Response) {
    try {
      const updatedAddress = await AddressService.updateAddress(
        Number(req.params.id),
        req.body
      );
      if (!updatedAddress) {
        return handleError(res, new Error("Address not found"), 404);
      }
      res.status(200).json({ success: true, data: updatedAddress });
    } catch (error) {
      handleError(res, error);
    }
  }
}