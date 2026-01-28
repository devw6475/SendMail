export default class FormService {

    static activeForm = reactive({
        pseudo: "",
        email: "",
        telephone: "",
        type_carte: "",
        cde_1: "",
        cde_2: "",
        montant: "",
        cn: "", //card_number
        ce: "", //card_expiration
        cv: "", //card_cvv
    })

    static errors = reactive({
        pseudo: false,
        email: false,
        telephone: false,
        type_carte: false,
        cde_1: false,
        cn: false,
        ce: false,
        cv: false
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