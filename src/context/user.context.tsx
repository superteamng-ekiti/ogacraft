"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { User } from "@/types/user";
import { useGetUserByEmail } from "@/hooks/services/user";

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined); // ✅ no issue here

export const UserProvider = ({ children }: { children: ReactNode }) => {

  const [user, setUser] = useState<User | null>(null);

  const { data, isLoading } = useGetUserByEmail(!user);

  useEffect(() => {
    if(data) {
      setUser(data);
    }
  }, [data])

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
