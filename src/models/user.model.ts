import { BaseTable } from "./baseTable";

export interface User extends BaseTable {
    password: string;
    email: string;
    firstName: string;
    lastName: string;
}