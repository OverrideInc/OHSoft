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

import co.edu.uniquindio.entidades.Anexos;
import co.edu.uniquindio.entidades.Ciudad;
import co.edu.uniquindio.entidades.Documentos;
import co.edu.uniquindio.negocio.CiudadEJB;
import co.edu.uniquindio.negocio.DocumentosEJB;
/**
 * 
 * @author Juan Jose Ramirez, Juan Camilo Correa Pacheco, Miguelangel Diaz Cabezas.
 *
 */
@Path("/documento")
@RequestScoped
public class DocumentosServices {
	//Contenedor de la ciudad.
	@EJB
	private DocumentosEJB dejb;
	/**
	 * Servicio registrar ciudad.
	 * @param ciudad, ciudad a probar.
	 * @return, retorna  ok si se agrego una 
	 * precondicion si fallo.
	 */
	@POST
	@Path("/registrar")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response registrarCiudad(Documentos documento) {
		return 	dejb.agregarDocumento(documento) ? 
				Response.ok().build() : 
				Response.status(Response.Status.PRECONDITION_FAILED).build();
	}
	/**
	 * Servicio  para buscar ciudad.
	 * @param idCiudad, identificador para buscar ciudad.
	 * @return, retorna la ciudad buscada.
	 */
	@GET
	@Path("/buscar/{documento}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarCiudad(@PathParam("ciudad") int idDocumento) {
		Documentos c = dejb.buscarDocumento(idDocumento);
		return c == null ? Response.noContent().build() : 
			Response.ok(c).build();
	}
	
	/**
	 * Servicio para listar la ciudades.
	 * @return, retorna la lista de las ciudades.
	 */
	@GET
	@Path("/listar")
	@Produces(MediaType.APPLICATION_JSON)
	public Response listarCiudades() {
		List<Documentos> c = dejb.listarDocumentos();
		return c == null ? Response.noContent().build() : 
			Response.ok(c).build();
	}
}
