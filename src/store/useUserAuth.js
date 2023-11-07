import { create } from 'zustand'

export const useUserAuth = create(set => ({
  user: null,
  set: user => set(state => ({ user: user })),
  remove: () => set(state => ({ user: null })),
}))