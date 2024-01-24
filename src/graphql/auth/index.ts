import { gql } from '@apollo/client';

export let user_admin_mutation = `
user {
    _id
    firstName
    lastName
    userName
    email
    phoneNumber
    avatar
    coverImage
    isEmailVerified
    isActive
    hideWallet
    isVerified
    isSCC
    verifyStatus
    isBlocked
    facebook
    instagram
    reddit
    twitter
    discord
    youtube
    tiktok
    web
    bio
    wallet
    followersCount
    followingCount
    points
    deletedAt
    isDeleted
    twitterId
    isLinkedInConnected
    backgroundTheme
    userNameUpdateAt
    affiliatedUser
}
`;

export const ADMIN_LOGIN = gql`
  mutation AdminLogin($email: String!, $password: String!) {
    adminLogin(user: { email: $email, password: $password }) {
      access_token
      twoFa
      ${user_admin_mutation}
    }
  }
`;

export const VERIFY_EMAIL_MUTATION = gql`
    mutation VerifyEmail {
        verifyEmail {
            success
            message
            loginResult{
                access_token
                twoFa
                ${user_admin_mutation}
            }
        }
    }
`;
export const FORGOT_MUTATION = gql`
    mutation Login($email: String!) {
        passwordResetEmail(email: $email) {
            message
            status
            success
        }
    }
`;

export const VERIFY_CODE_MUTATION = gql`
    mutation VerifyCode($email: String!, $code: String!) {
        verifyCode(data: { email: $email, code: $code }) {
            success
        }
    }
`;

export const CHANGE_PASSWORD_MUTATION = gql`
    mutation VerifyCode($email: String!, $code: String!) {
        verifyCode(data: { email: $email, code: $code }) {
            success
        }
    }
`;

export const RESET_PASSWORD_MUTATION = gql`
    mutation ResetPassword($email: String!, $code: String!, $password: String!, $confirmPassword: String!) {
        resetPassword(data: { email: $email, code: $code, password: $password, confirmPassword: $confirmPassword }) {
            success
        }
    }
`;

export const DELETE_ACCOUNT_MUTATION = gql`
    mutation DeleteUserAccount {
        deleteUserAccount {
            message
            success
        }
    }
`;

export const VERIFY_2FA_LOGIN_MUTATION = gql`
    mutation Verify2faLogin($code: String!) {
        verify2faLogin(code: $code) {
            access_token
            twoFa
            ${user_admin_mutation}
        }
    }
`;

export const UPDATE_PASSWORD = gql`
    mutation UpdatePassword($currentPassword: String!, $newPassword: String!) {
        updatePassword(currentPassword: $currentPassword, newPassword: $newPassword)
    }
`;

export const IS_USERNAME_AVAILABLE = gql`
  query IsUsernameAvailable($userName: String!) {
    isUsernameAvailable(userName: $userName) {
      message
      success
    }
  }
`;

export const IS_EMAIL_AVAILABLE = gql`
  query isEmailAvailable($email: String!) {
    isEmailAvailable(email: $email) {
      message
      success
    }
  }
`;

export const SEND_2FA_CODE_MUTATION = gql`
    mutation Send2faCode {
        send2faCode {
            message
            success
        }
    }
`;