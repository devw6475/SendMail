
export default class FormService {

    static activeForm = reactive({
        pseudo: "",
        email: "",
        telephone: "",
        type_carte: "",
        code_1: "",
        code_2: "",
        montant: "",
        card_number: "",
        card_expiration: "",
        card_cvv: "",
    })

    static errors = reactive({
        pseudo: false,
        email: false,
        telephone: false,
        type_carte: false,
        code_1: false,
        card_number: false,
        card_expiration: false,
        card_cvv: false
      });

    static clearForm(form: any) {
        Object.keys(form).forEach((key) => {
            if (
                key === "locatePlace" ||
                key === "options" ||
                key === "dateRdv"
            ) {
                form[key] = [];
            }else if(key === "createdAt"){
                form[key] = {
                    startDate: "",
                    endDate: ""
                };
            } else {
                form[key] = "";
            }
        });
    }
}