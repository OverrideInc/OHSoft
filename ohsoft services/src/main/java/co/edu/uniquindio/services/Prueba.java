package co.edu.uniquindio.services;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Path("/prueba")
@RequestScoped
public class Prueba {

	
	
	@GET
	@Path("/hola")
	@Produces(javax.ws.rs.core.MediaType.APPLICATION_JSON)
	public Response getHola() {
		
		return Response.ok().build();
	}
}
