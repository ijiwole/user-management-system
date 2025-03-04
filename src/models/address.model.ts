import { BaseTable } from "./baseTable";

export interface Address extends BaseTable {
    user_id: number;
    street: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
}