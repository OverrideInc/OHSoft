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

import co.edu.uniquindio.entidades.Ciudad;
import co.edu.uniquindio.negocio.CiudadEJB;

@Path("/ciudad")
@RequestScoped
public class CiudadServices {
	
	@EJB
	private CiudadEJB cejb;
	
	@POST
	@Path("/registrar")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response registrarCiudad(Ciudad ciudad) {
		return 	cejb.agregarCiudad(ciudad) ? 
				Response.ok().build() : 
				Response.status(Response.Status.PRECONDITION_FAILED).build();
	}
	
	@GET
	@Path("/buscar/{ciudad}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarCiudad(@PathParam("ciudad") int idCiudad) {
		Ciudad c = cejb.buscarCiudad(idCiudad);
		return c == null ? Response.noContent().build() : 
			Response.ok(c).build();
	}
	
	@GET
	@Path("/listar")
	@Produces(MediaType.APPLICATION_JSON)
	public Response listarCiudades() {
		List<Ciudad> c = cejb.listarCiudades();
		return c == null ? Response.noContent().build() : 
			Response.ok(c).build();
	}
}
