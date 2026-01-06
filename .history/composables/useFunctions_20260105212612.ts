import FormService from "~/services/forms.service";



const isOpen = ref(false)
const openModal = ref(false);
const check = ref(false);
export const useFunctions = () => {


  const form = FormService.activeForm;
  const resetForm = FormService.clearForm;

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

  function verifAllGood(){
    if(check.value === true){
      return false
    }else{
      return true
    }
  }

  function setOpenModal(){
    openModal.value = true;
    console.log("hdg")
  }

  function closeModal(){
    openModal.value = false;
    resetForm(form);
  }



  return {
    check,
    form,
    isOpen,
    choiceLanguage,
    openModal,
    verifAllGood,
    setOpenModal,
    changeLanguage,
    toggleMenu,
    closeMenu,
    handleResize
  }
}
