package co.edu.uniquindio.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

/**
 * Clase Anexos de la logica de negocio.
 *@author Juan Jose Ramirez, Juan Camilo Correa Pacheco, Miguelangel Diaz Cabezas.
 *@version 1.0
 */
@Entity
@NamedQueries({
@NamedQuery(name=Anexos.BUSCAR_X_ID,query="select c from Anexos c where c.idAnexos = ?1 "),
@NamedQuery(name=Anexos.LISTAR_ANEXOS,query="select c from Anexos c")})
public class Anexos {

//constantes
public final static String BUSCAR_X_ID="anexos.id";
public final static String LISTAR_ANEXOS="anexos.all";

//atributos
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "idAnexos", nullable = false)
private int idAnexos;
@Column(name = "nombre", length = 100, nullable = false)
private String nombre;
@Column(name = "descripcion", length = 250, nullable = false, unique = true)
private String descripcion;

/**
 * construtor
 * @param idAnexos
 * @param nombre
 * @param descripcion
 */
public Anexos(int idAnexos, String nombre, String descripcion) {
	super();
	this.idAnexos = idAnexos;
	this.nombre = nombre;
	this.descripcion = descripcion;
}

public Anexos() {
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



}
