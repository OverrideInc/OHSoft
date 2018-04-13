package co.edu.uniquindio.entidades;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Empleado implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idEmpleado", nullable = false)
	private int idEmpleado;
	@Column(name = "nombre", nullable = false, length = 50)
	private String nombre;
	@Column(name = "correo", nullable = false, length = 50)
	private String correo;
	@Column(name = "contrasenia", nullable = false, length = 100)
	private String contrasenia;
	@ManyToOne
	@JoinColumn(name = "idEmpresa", nullable = false)
	private Empresa empresa;
	
	public Empleado(int idEmpleado, String nombre, String correo, String contrasenia, Empresa empresa) {
		super();
		this.idEmpleado = idEmpleado;
		this.nombre = nombre;
		this.correo = correo;
		this.contrasenia = contrasenia;
		this.empresa = empresa;
	}
	
	public Empleado() {
		super();
	}

	public int getIdEmpleado() {
		return idEmpleado;
	}

	public void setIdEmpleado(int idEmpleado) {
		this.idEmpleado = idEmpleado;
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

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

}
