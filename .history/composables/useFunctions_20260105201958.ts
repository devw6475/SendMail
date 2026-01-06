


const isOpen = ref(false)
export const useFunctions = () => {


  const languageStore = useLanguageStore();

  const choiceLanguage = computed(() => languageStore.language);


  function changeLanguage(lang: any){
    languageStore.setLanguage(lang);
  }

  function toggleMenu() {
    isOpen.value = !isOpen.value
  }

  function closeMenu() {
    isOpen.value = false
  }

  function handleResize() {
    if (window.innerWidth >= 992) {
      closeMenu()
    }
  }



  return {
    isOpen,
    choiceLanguage,
    changeLanguage,
    toggleMenu,
    closeMenu,
    handleResize
  }
}
