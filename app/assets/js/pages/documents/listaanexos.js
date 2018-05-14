parasails.registerPage('listaanexos', {
    data: {
        formData: {
            anexos: [],
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
            peticion.open("GET", `/getAnexos?nit=${_nit}`, true);
            peticion.send();
        
    },
    mounted: async function () {
    },
    methods: {
        obtenerClass(item) {

            var cant;

            if(item.documentos.length == 0){
                cant = 1;
            }

            else{
                cant = item.documentos.length;
            }

            var idx = (item.doc_count / cant);


            if (idx < 0.5){
                return 'alert-danger';
            }

            if(idx < 1){
                return 'alert-warning';
            }

            return 'alert-success';
        }
    }
});
