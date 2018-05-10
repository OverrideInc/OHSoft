package co.edu.uniquindio.dto;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

import co.edu.uniquindio.entidades.Documentos;

@XmlRootElement
public class DocumentosAnexosDTO {
	
	//atributos
		private int idDocumento;
		private String nombre;
		private int peso;
		
		
		public DocumentosAnexosDTO() {
			super();
		}
		
		public DocumentosAnexosDTO(int idDocumento, String nombre, int peso) {
			super();
			this.idDocumento = idDocumento;
			this.nombre = nombre;
			this.peso = peso;
		}
		public int getIdDocumento() {
			return idDocumento;
		}
		public void setIdDocumento(int idDocumento) {
			this.idDocumento = idDocumento;
		}
		public String getNombre() {
			return nombre;
		}
		public void setNombre(String nombre) {
			this.nombre = nombre;
		}
		public int getPeso() {
			return peso;
		}
		public void setPeso(int peso) {
			this.peso = peso;
		} 
		
		
	
}
