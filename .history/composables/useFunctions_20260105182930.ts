


export const useFunctions = () => {

  const route = useRoute()

  const languageStore = useLanguageStore();

  const choiceLanguage = computed(() => languageStore.language);

  const isOpen = ref(false)





  return {
    choiceLanguage
  }
}
