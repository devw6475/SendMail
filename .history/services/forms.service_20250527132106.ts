export default class FormService {

    static Loginform = reactive({
        email: "ezechielkouame57@gmail.com",
        password: "ezerester"
    })

    static pagination = reactive({
        index: 0,
        size: 10
    })

    static searchUsers = reactive({
        nom: "",
        email: "",
        statut: "",
        createdAt : {
            startDate: "",
            endDate: ""
        }
    })


    static addUser = reactive({
        nom: "",
        prenom: "",
        email: "",
        statut_id: "",
        role_id: "",
        phone: "",
        password: "",
        service_id: "",
        location_perim: "",
        location_coord: [] as any[]
    })



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