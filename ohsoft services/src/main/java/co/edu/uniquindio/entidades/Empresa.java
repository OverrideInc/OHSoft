package co.edu.uniquindio.entidades;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({
	@NamedQuery(name=Empresa.BUSCAR_EMPRESA,query="select e from Empresa e where e.idEmpresa = ?1"),
	@NamedQuery(name=Empresa.LISTAR_EMPRESAS,query="select e from Empresa e")})
public class Empresa implements Serializable{

	
	/**
	 * 
	 */
	public final static String BUSCAR_EMPRESA = "empresa.id";
	public final static String LISTAR_EMPRESAS = "empresa.all";
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idEmpresa", nullable = false)
	private int idEmpresa;
	@Column(name = "nit", length = 50, nullable = false, unique = true)
	private String nit;
	@Column(name = "nombre", length = 50, nullable = false)
	private String nombre;
	@Column(name = "correo", length = 50, nullable = false, unique = true)
	private String correo;
	@ManyToOne
	@JoinColumn(name = "idCiudad", nullable = false)
	private Ciudad ciudad;
	
	public Empresa(int idEmpresa, String nit, String nombre, String correo, Ciudad ciudad) {
		super();
		this.idEmpresa = idEmpresa;
		this.nit = nit;
		this.nombre = nombre;
		this.correo = correo;
		this.ciudad = ciudad;
	}
	
	public Empresa() {
		super();
	}

	public int getIdEmpresa() {
		return idEmpresa;
	}

	public void setIdEmpresa(int idEmpresa) {
		this.idEmpresa = idEmpresa;
	}

	public String getNit() {
		return nit;
	}

	public void setNit(String nit) {
		this.nit = nit;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public Ciudad getCiudad() {
		return ciudad;
	}

	public void setCiudad(Ciudad ciudad) {
		this.ciudad = ciudad;
	}

}
