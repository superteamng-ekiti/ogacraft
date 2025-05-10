/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
    account_type: string;
    categories: string[];
    email: string;
    first_name: string;
    last_name: string;
    gender: string;
    location: string;
    projects: any;
    reviews: any;
    _id: string; 
}