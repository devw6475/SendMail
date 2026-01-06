import FormService from "~/services/forms.service";



const isOpen = ref(false)
const openModal = ref(false);
export const useFunctions = () => {

  const form = FormService.activeForm;

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
    form,
    isOpen,
    choiceLanguage,
    openModal,
    changeLanguage,
    toggleMenu,
    closeMenu,
    handleResize
  }
}
