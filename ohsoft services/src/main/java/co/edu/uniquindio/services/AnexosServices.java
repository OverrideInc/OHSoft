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
import co.edu.uniquindio.negocio.AnexosEJB;

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
	public Response registrarAnexo(Anexos anexo) {
		return 	nejb.agregarAnexo(anexo)? 
				Response.ok().build() : 
				Response.status(Response.Status.PRECONDITION_FAILED).build();
	}
	/**
	 * Servicio  para buscar ciudad.
	 * @param idCiudad, identificador para buscar ciudad.
	 * @return, retorna la ciudad buscada.
	 */
	@GET
	@Path("/buscar/{anexo}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarCiudad(@PathParam("anexo") int idAnexo) {
		Anexos c = nejb.buscarAnexo(idAnexo);
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
		List<Anexos> c = nejb.listarAnexo();
		return c == null ? Response.noContent().build() : 
			Response.ok(c).build();
	}
}
