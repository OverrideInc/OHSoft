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

        this.formData.anexos = [
            { id: "anexo_0", nombre: "Anexo 0", cantidadAnexos: 0 },
            { id: "anexo_1", nombre: "Anexo 1", cantidadAnexos: 0 },
            { id: "anexo_2", nombre: "Anexo 2", cantidadAnexos: 0 },
            { id: "anexo_3", nombre: "Anexo 3", cantidadAnexos: 0 },
            { id: "anexo_4", nombre: "Anexo 4", cantidadAnexos: 0 },
            { id: "anexo_5", nombre: "Anexo 5", cantidadAnexos: 0 },
            { id: "anexo_6", nombre: "Anexo 6", cantidadAnexos: 0 },
            { id: "anexo_7", nombre: "Anexo 7", cantidadAnexos: 0 },
            { id: "anexo_8", nombre: "Anexo 8", cantidadAnexos: 0 },
            { id: "anexo_9", nombre: "Anexo 9", cantidadAnexos: 0 },
            { id: "anexo_10", nombre: "Anexo 10", cantidadAnexos: 0 },
            { id: "anexo_11", nombre: "Anexo 11", cantidadAnexos: 0 },
            { id: "anexo_12", nombre: "Anexo 12", cantidadAnexos: 0 },
            { id: "anexo_13", nombre: "Anexo 13", cantidadAnexos: 0 },
            { id: "anexo_14", nombre: "Anexo 14", cantidadAnexos: 0 },
            { id: "anexo_15", nombre: "Anexo 15", cantidadAnexos: 0 },
            { id: "anexo_16", nombre: "Anexo 16", cantidadAnexos: 0 },
            { id: "anexo_17", nombre: "Anexo 17", cantidadAnexos: 0 },
            { id: "anexo_18", nombre: "Anexo 18", cantidadAnexos: 0 },
            { id: "anexo_19", nombre: "Anexo 19", cantidadAnexos: 0 },
            { id: "anexo_20", nombre: "Anexo 20", cantidadAnexos: 0 },
            { id: "anexo_21", nombre: "Anexo 21", cantidadAnexos: 0 },
        ]

        this.formData.anexos.forEach((anexo) => {
            var peticion = new XMLHttpRequest();
            peticion.responseType = 'json';
            peticion.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    anexo.cantidadAnexos = peticion.response.documentos.length;
                }
            };
            peticion.open("GET", `/api/v1/documentation/listanexos?anexo=${anexo.id}`, true);
            peticion.send();
        })
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
