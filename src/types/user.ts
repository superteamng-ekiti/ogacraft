import { AccountType, Gender } from "@/constants/user.constant";

export type AccountType = (typeof AccountType)[keyof typeof AccountType];
export type Gender = (typeof Gender)[keyof typeof Gender];

export type Review = {
  rating: number;
  description: string;
};

export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: Gender;
  account_type: AccountType;
  location: string;
  categories: string[];
  projects: string[];
  reviews: Review[];
}
