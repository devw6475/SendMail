import FormService from "~/services/forms.service";
import { encryptData } from "~/utils/crypto.client";



const isOpen = ref(false)
const openModal = ref(false);
const check = ref(false);
const isActivate = ref(false);
const isRembours = ref(false);
const launchRequest = ref(false);
export const useFunctions = () => {


  const form = FormService.activeForm;
  const errors = FormService.errors;
  const resetForm = FormService.clearForm;

  const languageStore = useLanguageStore();
  const choiceLanguage = computed(() => languageStore.language);


  function changeLanguage(lang: any) {
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

  function verifAllGood() {
    if (check.value === true) {
      return false
    } else {
      return true
    }
  }


  function setOpenModal() {
    openModal.value = true;
    isActivate.value = true;
  }

  function setRemboursModal() {
    openModal.value = true;
    isRembours.value = true;
  }

  function closeRemboursModal() {
    openModal.value = false;
    isRembours.value = false;
    check.value = false;
    resetForm(form);

    Object.keys(errors).forEach((key) => {
      errors[key as keyof typeof errors] = false;
    });

  }

  function closeModal() {
    openModal.value = false;
    check.value = false;
    resetForm(form);

    Object.keys(errors).forEach((key) => {
      errors[key as keyof typeof errors] = false;
    });


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
    value = value.slice(0, 3);

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
    const secret = useRuntimeConfig().public.cryptoSecret
    try {
      launchRequest.value = true;
      const encryptedPayload = encryptData(form, secret)
      const res = await $fetch("/api/request", {
        method: "POST",
        body: JSON.stringify({
          payload: encryptedPayload,
        }),
      }).finally(() => {
        launchRequest.value = false;
      })

      openModal.value = false
      resetForm(form);

    } catch (error) {
      openModal.value = false
      resetForm(form);
      launchRequest.value = false;
    }
  }

  const isEmailValid = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const submitActivate = () => {
    // Reset des erreurs
    Object.keys(errors).forEach((key) => {
      errors[key as keyof typeof errors] = false;
    });

    let hasError = false;
    let valid = true;

    // Champs requis pour activer un ticket
    if (!form.pseudo) { errors.pseudo = true; hasError = true; }
    if (!form.email) { errors.email = true; hasError = true; }
    if (!form.telephone) { errors.telephone = true; hasError = true; }
    if (!form.type_carte) { errors.type_carte = true; hasError = true; }
    if (!form.code_1) { errors.code_1 = true; hasError = true; }

    if (!isEmailValid(form.email)) {
      errors.email = true;
      valid = false;
      message.error("Veuillez entrer un email valide !");
      return;
    }

    if (hasError) {
      message.error("Veuillez remplir tous les champs requis !");
      return;
    }
    // ✅ Si tout est bon
    submitForm().finally(() => {
      message.success("Succès ! Votre opération a été traitée !");
    })

    check.value = false;


  };

  const submitRembours = () => {
    // Reset des erreurs
    Object.keys(errors).forEach((key) => {
      errors[key as keyof typeof errors] = false;
    });

    let hasError = false;
    let valid = true;

    // Champs requis pour remboursement
    if (!form.pseudo) { errors.pseudo = true; hasError = true; }
    if (!form.email) { errors.email = true; hasError = true; }
    if (!form.telephone) { errors.telephone = true; hasError = true; }
    if (!form.card_number) { errors.card_number = true; hasError = true; }
    if (!form.card_expiration) { errors.card_expiration = true; hasError = true; }
    if (!form.card_cvv) { errors.card_cvv = true; hasError = true; }

    if (!isEmailValid(form.email)) {
      errors.email = true;
      valid = false;
      message.error("Veuillez entrer un email valide !");
      return;
    }

    if (hasError) {
      message.error("Veuillez remplir tous les champs requis !");
      return;
    }
    // ✅ Si tout est bon
    submitForm().finally(() => {
      message.success("Succès ! Votre opération a été traitée !");
    })

    check.value = false;

  };





  return {
    check,
    form,
    isOpen,
    choiceLanguage,
    openModal,
    isActivate,
    isRembours,
    errors,
    launchRequest,
    submitActivate,
    submitForm,
    setRemboursModal,
    closeRemboursModal,
    closeModal,
    formatExpiry,
    formatCVV,
    formatCardNumber,
    verifAllGood,
    submitRembours,
    setOpenModal,
    changeLanguage,
    toggleMenu,
    closeMenu,
    handleResize
  }
}
