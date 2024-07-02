import { create } from "zustand"

interface SessionStore {
  user: any
  token: string | null
  setUser: (user: any) => void
  setToken: (token: string | null) => void
}

export const session = create<SessionStore>((set) => ({
  user: null,
  token: null,
  setUser: (user: any) => set({ user: user }),
  setToken: (token: string | null) => set({ token: token }),
}))
