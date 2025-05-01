import { AuthForm } from "@/app/auth/_components/auth-form";
import { AuthFormWrapper } from "@/app/auth/_components/auth-form-wrapper";
import React from "react";

export const SignUpForm = () => {
  return (
    <AuthFormWrapper
      title="Create an account"
      description="Provide your email address"
    >
        <AuthForm authType="sign_up" userType="client" />
    </AuthFormWrapper>
  );
};
