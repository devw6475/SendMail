import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('languageStore', {
  state: () => {
    return {
      language: "fr"
    }
  },
  persist: true,
  actions: {
    setLanguage(langue: string) {
      this.language = langue;
    }
  },
})
