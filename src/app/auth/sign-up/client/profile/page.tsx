import { AuthFormWrapper } from "@/app/auth/_components/auth-form-wrapper";
import React from "react";
import { ProfileCompletionForm } from "./_components/profile-completion-form";

const ProfileCompletionPage = () => {
  return (
    <AuthFormWrapper
      isLogo={false}
      title="Complete Profile"
      description="Fill in this form to complete your profile, this can be done later if you use the skip button"
      skipLink="/auth/sign-up/client/welcome"
    >
      <ProfileCompletionForm />
    </AuthFormWrapper>
  );
};

export default ProfileCompletionPage;
