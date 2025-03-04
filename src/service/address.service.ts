import db from "../config/database.js";
import { Address } from "../models/address.model.js";

export class AddressService {
  static async getAddressByUserId(userId: number) {
    return db("addresses").where({ user_id: userId }).first();
  }

  static async createAddress(addressData: Partial<Address>) {
    return db("addresses").insert(addressData).returning("*");
  }

  static async updateAddress(userId: number, addressData: Partial<Address>) {
    return db("addresses").where({ user_id: userId }).update(addressData).returning("*");
  }
}
