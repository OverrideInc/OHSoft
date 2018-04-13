package co.edu.uniquindio.entidades;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({
	@NamedQuery(name=Ciudad.BUSCAR_X_ID,query="select c from Ciudad c where c.idCiudad = ?1 "),
	@NamedQuery(name=Ciudad.LISTAR_CIUDADES,query="select c from Ciudad c")})
public class Ciudad implements Serializable{
	
	
	/**
	 * 
	 */
	public static final String BUSCAR_X_ID="cuidad.id";
	public static final String LISTAR_CIUDADES="cuidad.all";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idCiudad", nullable = false)
	private int idCiudad;
	@Column(name = "nombre", length = 50, nullable = false)
	private String nombre;
	
	public Ciudad(int idCiudad, String nombre) {
		super();
		this.idCiudad = idCiudad;
		this.nombre = nombre;
	}
	
	public Ciudad() {
		super();
	}
	
	public int getIdCiudad() {
		return idCiudad;
	}
	public void setIdCiudad(int idCiudad) {
		this.idCiudad = idCiudad;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
}
