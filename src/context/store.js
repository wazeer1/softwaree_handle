import { create } from 'zustand'


const useUserStore = create((set) => ({
    isVerified: false,
    handleLogin: () => set(() => ({ isVerified: true})),
  }))

export {useUserStore}