import { user } from "./user.type";

export type userDto = {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: [user],
    support: {
        url: string,
        text: string
    }
};