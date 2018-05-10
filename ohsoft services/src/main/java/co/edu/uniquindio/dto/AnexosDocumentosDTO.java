package co.edu.uniquindio.dto;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

import co.edu.uniquindio.entidades.Documentos;
@XmlRootElement
public class AnexosDocumentosDTO {

	//atributos
	private int idAnexos;
	private String nombre;
	private String descripcion;
	private List<DocumentosAnexosDTO> documentos;
	
	
	
	
	public AnexosDocumentosDTO() {
		super();
	}
	
	
	public int getIdAnexos() {
		return idAnexos;
	}


	public void setIdAnexos(int idAnexos) {
		this.idAnexos = idAnexos;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getDescripcion() {
		return descripcion;
	}


	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}


	public List<DocumentosAnexosDTO> getDocumentos() {
		return documentos;
	}


	public void setDocumentos(List<DocumentosAnexosDTO> documentos) {
		this.documentos = documentos;
	}


	


	
	
	
	
	
}
