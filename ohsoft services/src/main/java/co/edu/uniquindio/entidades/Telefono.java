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
public class Telefono implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idTelefono")
	private int idTelefono;
	@Column(name = "numero", nullable = false, length = 20)
	private String numero;
	@Column(name = "descripcion", nullable = true, length = 50)
	private String descripcion;
	@ManyToOne
	@JoinColumn(name = "idEmpresa", nullable = false)
	private Empresa empresa;
	
	public Telefono(int idTelefono, String numero, String descripcion, Empresa empresa) {
		super();
		this.idTelefono = idTelefono;
		this.numero = numero;
		this.descripcion = descripcion;
		this.empresa = empresa;
	}
	
	public Telefono() {
		super();
	}

	public int getIdTelefono() {
		return idTelefono;
	}

	public void setIdTelefono(int idTelefono) {
		this.idTelefono = idTelefono;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}
	
}
