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

  const formatCardNumber = () => {
    let value = form.card_number || "";
  
    // Supprimer tout sauf chiffres
    value = value.replace(/\D/g, "");
  
    // Limiter à 16 chiffres
    value = value.slice(0, 16);
  
    // Ajouter espace tous les 4 chiffres
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
  
    form.card_number = value;
  };
  
  const formatCVV = () => {
    let value = form.card_cvv || "";

    value = value.replace(/\D/g, "");
    value = value.slice(0,3);

    form.card_cvv = value;
  }

  const formatExpiry = () => {
    let value = form.card_expiration || "";

    if (value.length >= 3) {
      value = value.slice(0, 8);
      value = value.replace(/(\d{2})(\d{1,2})/, "$1 / $2");
    }

    form.card_expiration = value;
  }

  return {
    check,
    form,
    isOpen,
    choiceLanguage,
    openModal,
    formatExpiry,
    formatCVV,
    formatCardNumber,
    verifAllGood,
    setOpenModal,
    changeLanguage,
    toggleMenu,
    closeMenu,
    handleResize
  }
}
