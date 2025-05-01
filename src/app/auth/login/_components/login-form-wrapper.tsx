import React from 'react'
import { AuthFormWrapper } from '../../_components/auth-form-wrapper'
import { LoginForm } from './login-form'

export const LoginFormWrapper = () => {
  return (
    <AuthFormWrapper
      title="Welcome back"
      description="Provide your email address"
    >
        <LoginForm />
    </AuthFormWrapper>
  )
}
