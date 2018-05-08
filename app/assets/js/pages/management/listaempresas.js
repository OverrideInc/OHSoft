parasails.registerPage('listaempresas', {
    data: {
        formData: {
            empresas: []
        },
        formErrors: {},
        syncing: false,
        cloudError: '',
        cloudSuccess: false,
    },
    beforeMount: function () {
        var peticion = new XMLHttpRequest();
        peticion.responseType = 'json';
        var _this = this;
        peticion.onreadystatechange = function () {
            if (peticion.readyState == 4 && peticion.status == 200) {
                _this.formData.empresas = peticion.response.empresas;
            }
        };
        peticion.open("GET", `/gempresas`, true);
        peticion.send();
        console.log('finish');
    }
    ,
    mounted: async function () {
    },
    methods: {
        obtenerClass(item) {
            return 'alert-dark';
        }
    }
});
