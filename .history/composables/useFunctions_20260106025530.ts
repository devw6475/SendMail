import FormService from "~/services/forms.service";



const isOpen = ref(false)
const openModal = ref(false);
const check = ref(false);
const isActivate = ref(false);
const isRembours = ref(false);
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

  function verifRembGood(){
    if(check.value === true){
      return false
    }else{
      return true
    }
  }

  

  function setOpenModal(){
    openModal.value = true;
    isActivate.value = true;
  }

  function setRemboursModal(){
    openModal.value = true;
    isRembours.value = true;
  }

  function closeRemboursModal(){
    openModal.value = false;
    isRembours.value = false;
    check.value = false;
    resetForm(form);

  }

  function closeModal(){
    openModal.value = false;
    check.value = false;
    resetForm(form);

    setTimeout(() => {
      isActivate.value = false;
    }, 100)
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
  
    // 1️⃣ Garder uniquement les chiffres
    value = value.replace(/\D/g, "");
  
    // 2️⃣ Limiter à MMYYYY (6 chiffres)
    value = value.slice(0, 6);
  
    // 3️⃣ Validation & correction du mois
    if (value.length >= 2) {
      let month = parseInt(value.slice(0, 2), 10);
  
      if (month === 0) month = 1;
      if (month > 12) month = 12;
  
      value = month.toString().padStart(2, "0") + value.slice(2);
    }
  
    // 4️⃣ Format MM / YYYY (UNE SEULE FOIS)
    if (value.length >= 3) {
      value = value.replace(
        /^(\d{2})(\d{1,4})$/,
        "$1 / $2"
      );
    }
  
    form.card_expiration = value;
  };
  
  const submitForm = async () => {
    try {
      const res = await $fetch("/api/send-email", {
        method: "POST",
        body: form,
      })
  
      openModal.value = false
      resetForm(form);
    } catch (error) {
      console.error("Erreur", error)
    }
  }
  

  return {
    check,
    form,
    isOpen,
    choiceLanguage,
    openModal,
    isActivate,
    isRembours,
    submitForm,
    setRemboursModal,
    closeRemboursModal,
    closeModal,
    formatExpiry,
    formatCVV,
    formatCardNumber,
    verifAllGood,
    verifRembGood,
    setOpenModal,
    changeLanguage,
    toggleMenu,
    closeMenu,
    handleResize
  }
}
