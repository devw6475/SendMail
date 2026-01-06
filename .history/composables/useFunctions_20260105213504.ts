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

  const formatCardNumber = (e: Event) => {
    const input = e.target as HTMLInputElement;
  
    // Supprimer tout sauf chiffres
    let value = input.value.replace(/\D/g, "");

    console.log(value)
  
    // Limiter à 16 chiffres
    value = value.slice(0, 16);
  
    // Ajouter espace tous les 4 chiffres
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
  
    form.card_number = value;

  };


  return {
    check,
    form,
    isOpen,
    choiceLanguage,
    openModal,
    formatCardNumber,
    verifAllGood,
    setOpenModal,
    changeLanguage,
    toggleMenu,
    closeMenu,
    handleResize
  }
}
