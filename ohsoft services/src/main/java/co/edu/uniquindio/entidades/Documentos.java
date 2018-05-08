package co.edu.uniquindio.entidades;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Clase Documentos de la logica de negocio.
 *@author Juan Jose Ramirez, Juan Camilo Correa Pacheco, Miguelangel Diaz Cabezas.
 *@version 1.0
 */
@Entity
@NamedQueries({
@NamedQuery(name=Documentos.BUSCAR_DOCUMENTO,query="select c from Documentos c where c.idDocumento = ?1 "),
@NamedQuery(name=Documentos.LISTAR_DOCUMENTOS,query="select c from Documentos c")})
public class Documentos implements Serializable {
	
	//Constantes
		public final static String BUSCAR_DOCUMENTO = "documento.id";
		public final static String LISTAR_DOCUMENTOS = "documento.all";
	
	//Atributos
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "idDocumento", nullable = false)
		private int idDocumento;
		@Column(name = "nombre", length = 100, nullable = false)
		private String nombre;
		@Column(name = "peso", nullable = false)
		private int peso;
		@ManyToOne
		@JoinColumn(name = "idAnexos", nullable = true)
		private Anexos anexos;
	
	private static final long serialVersionUID = 1L;

	public Documentos(int idDocumento, String nombre, int peso, Anexos anexo) {
		super();
		this.idDocumento=idDocumento;
		this.nombre=nombre;
		this.peso=peso;
		this.anexos=anexo;
	}
	
	public Documentos() {
		super();
		
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

	public Anexos getAnexos() {
		return anexos;
	}

	public void setAnexos(Anexos anexos) {
		this.anexos = anexos;
	}
   
	
	
}
