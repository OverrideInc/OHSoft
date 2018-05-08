parasails.registerPage('listaanexos', {
    data: {
        formData: {
            anexos: [],
            documents: []
        },
        formErrors: {},
        syncing: false,
        cloudError: '',
        cloudSuccess: false,
    },
    beforeMount: function () {

            var _this=this;
            var peticion = new XMLHttpRequest();
            peticion.responseType = 'json';
            peticion.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
        
                    _this.formData.anexos=peticion.response.anexos;
                }
            };
            peticion.open("GET", `/getAnexos`, true);
            peticion.send();
        
    },
    mounted: async function () {
    },
    methods: {
        obtenerClass(item) {
            if (item.cantidadAnexos > 2)
                return 'alert-danger';

            return 'alert-dark';
        }
    }
});
