import { create } from "zustand"

interface SessionStore {
  user: any
  token: string | null
  setUser: (user: any) => void
  setToken: (token: string) => void
}

export const session = create<SessionStore>((set) => ({
  user: null,
  token: null,
  setUser: (user: any) => set({ user: user }),
  setToken: (token: string) => set({ token: token }),
}))
