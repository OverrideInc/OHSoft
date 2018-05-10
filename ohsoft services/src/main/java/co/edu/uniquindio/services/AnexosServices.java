package co.edu.uniquindio.services;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.MediaType;

import co.edu.uniquindio.dto.AnexosDocumentosDTO;
import co.edu.uniquindio.entidades.Anexos;
import co.edu.uniquindio.entidades.Documentos;
import co.edu.uniquindio.negocio.AnexosEJB;
import co.edu.uniquindio.negocio.DocumentosEJB;

/**
 * 
 * @author Juan Jose Ramirez, Juan Camilo Correa Pacheco, Miguelangel Diaz Cabezas.
 *
 */
@Path("/anexos")
@RequestScoped
public class AnexosServices {
	//Contenedor de la ciudad.
	@EJB
	private AnexosEJB nejb;
	private DocumentosEJB dejb;
	
	/**
	 * Servicio para listar la anexos con documentos.
	 * @return, retorna la lista de las ciudades.
	 */
	@GET
	@Path("/listaranexos")
	@Produces(MediaType.APPLICATION_JSON)
	public Response listarPorDocumentos() {
		List<AnexosDocumentosDTO> anexos = nejb.listarPorAnexo();
		return anexos == null ? Response.noContent().build() : 
			Response.ok(anexos).build();
	}
}
