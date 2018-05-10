parasails.registerPage('listaanexos', {
    data: {
        formData: {
            anexos: [],
            documents: [],
            query_pars : [], 
            nit : ''
        },
        formErrors: {},
        syncing: false,
        cloudError: '',
        cloudSuccess: false,
    },
    beforeMount: function () {
            var _this=this;
            this.formData.nit = decodeURIComponent(
                window.location.search.replace(
                    new RegExp("^(?:.*[&\\?]" 
                    + encodeURIComponent('nit').replace(/[\.\+\*]/g, "\\$&") 
                    + "(?:\\=([^&]*))?)?.*$", "i"), "$1"
                ));
            var _nit = this.formData.nit;
            var peticion = new XMLHttpRequest();
            peticion.responseType = 'json';
            peticion.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    _this.formData.anexos=peticion.response.anexos;
                    if(!_nit){
                        _this.formData.nit = peticion.response.nit;
                    }
                }
            };
            peticion.open("GET", `/getAnexos`, true);
            peticion.send();
        
    },
    mounted: async function () {
    },
    methods: {
        obtenerClass(item) {

            if (item.cantidadAnexos < 2){
                return 'alert-danger';
            }

            if(item.cantidadAnexos < 3){
                return 'alert-warning';
            }

            return 'alert-success';
        }
    }
});
