import db from "../config/database.js";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import { User } from "../models/user.model.js";
import dotenv from "dotenv";


dotenv.config();
export class UserService {
  static async createUser(userData: Partial<User>) {
    const saltRounds =  10;
    if (!userData.password) {
      throw new Error("Password is required");
    }
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    const newUser = { ...userData, password: hashedPassword };
    
    return db("users").insert(newUser).returning("*");
  }

  static async getUsers(pageNumber: number = 0, pageSize: number = 10) {
    return db("users")
      .select("*")
      .offset(pageNumber * pageSize)
      .limit(pageSize);
  }

  static async getUserCount() {
    const result = await db("users").count("id as count").first();
    return result ? result.count : 0;
  }

  static async getUserById(id: number) {
    return db("users")
      .where({ "users.id": id })
      .leftJoin("addresses", "users.id", "addresses.user_id")
      .select(
        "users.*",
        "addresses.street",
        "addresses.city",
        "addresses.state",
        "addresses.zip_code",
        "addresses.country"
      )
      .first();
  }

  static async login (email: string, password: string) {
    const user = await db("users").where({ email }).first();

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
      expiresIn: '1h'
    })
    return {token, user};
  }
}
