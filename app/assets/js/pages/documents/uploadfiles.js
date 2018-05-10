
parasails.registerPage('uploadfiles', {
    data: {
        formData: {
            documents: [],
            lista:[],
            nombre:'',
            nit:'', 
            anexo:'', 
            name:''
        },
        formErrors: {
        },
        syncing: false,
        cloudError: '',
        cloudSuccess: false,
    },
    beforeMount: function () {
        const anexoNombre = decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent('anexo').replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
        var nit;
        nit = decodeURIComponent(
                window.location.search.replace(
                    new RegExp("^(?:.*[&\\?]" 
                    + encodeURIComponent('nit').replace(/[\.\+\*]/g, "\\$&") 
                    + "(?:\\=([^&]*))?)?.*$", "i"), "$1"
                ));
        console.log('nit = ' + nit);
        this.formData.anexo = anexoNombre;
        this.formData.nit = nit;

        var peticion = new XMLHttpRequest();
        peticion.responseType = 'json';
        const _this = this;
        peticion.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                _this.formData.nombreAnexo = peticion.response.nombre;
                _this.formData.descripcionAnexo = peticion.response.descripcion;
                _this.formData.documents = peticion.response.documentos;
                _this.formData.lista = peticion.response.docs;
                _this.nombre = peticion.response.docs[0];
            }
        };
        peticion.open("GET", `/api/v1/documentation/listanexos?anexo=${anexoNombre}&nit=${nit}`, true);
        peticion.send();
        
        

    },
    mounted: async function () {
    },
    methods: {
        previewFiles() {
            this.formData.name = this.$refs.myFiles.files[0].name;
            this.getBase64(this.$refs.myFiles.files[0]);
        },
        submittedForm: async function () {
            alert('Se guardó el archivo correctamente');
            window.location.reload();
        },
        handleParsingForm: function () {
            this.formErrors = {};
            var argins = this.formData;
            var argins = this.formData;

            // Validate full name:
            if (!argins.nombre) {
                this.formErrors.nombre = true;
            }

            if (Object.keys(this.formErrors).length > 0) {
                 return;
            }
            
            return argins;
        },
        getBase64: function (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.formData.file = reader.result;
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        },
        test: function(){
            console.log('when call');
            console.log(this.formData.lista);
        }
    }
});  