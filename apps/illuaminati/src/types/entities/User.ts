import type { FieldValue } from 'firebase/firestore'

export type UserId = string

export const userCollection = 'users'

export type User = {
  userId: string
  createdAt: string
  displayName: string
  email: string
  hobby: string
  password: string
  profileImagePath: string
  selfIntroduction: string
  updatedAt: string
}

export type CreateUserDto = Omit<User, 'userId' | 'createdAt' | 'updatedAt'> & {
  createdAt: FieldValue
  updatedAt: FieldValue
}
