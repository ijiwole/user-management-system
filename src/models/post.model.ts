import { BaseTable } from "./baseTable";

export interface Post extends BaseTable {
    user_id: number;
    title: string;
    body: string;
}