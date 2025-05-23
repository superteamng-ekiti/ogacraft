import { AccountType, Gender } from "@/constants/user.constant";

export type AccountType = (typeof AccountType)[keyof typeof AccountType];
export type Gender = (typeof Gender)[keyof typeof Gender];

export type Review = {
  rating: number;
  description: string;
};

export interface User {
  _id: string;
  auth_id: string;
  first_name: string;
  last_name: string;
  profile_description?: string;
  email: string;
  gender: Gender;
  account_type: AccountType;
  location: string;
  categories: string[];
  projects: string[];
  reviews: Review[];
  wallet_address: string;
  profile_picture: string;
  years_of_experience: number;
}
