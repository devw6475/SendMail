import { defineStore } from 'pinia'

export const useUserStore = defineStore('usersStore', {
  state: () => {
    return {
      langage: ""
    }
  },
  persist: true,
  actions: {
    setLanguage(langue: string) {
      this.langage = langue;
    }
  },
})
