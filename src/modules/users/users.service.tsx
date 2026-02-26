import { getCurrentUser } from '@/services/api'
import type { User } from './users.types'

export async function fetchUser(): Promise<User> {
  return await getCurrentUser()
}