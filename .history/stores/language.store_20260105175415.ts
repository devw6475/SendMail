import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('languageStore', {
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
