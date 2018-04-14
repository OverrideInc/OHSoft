package co.edu.uniquindio.services;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import co.edu.uniquindio.dto.LoginDTO;
import co.edu.uniquindio.entidades.Empleado;
import co.edu.uniquindio.negocio.EmpleadoEJB;

@Path("/empleado")
@RequestScoped
public class EmpleadoServices {
	
	@EJB
	private EmpleadoEJB eejb;
	
	@POST
	@Path("/registrar")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response registrarEmpleado(Empleado Empleado) {
		try {
			return (eejb.agregarEmpleado(Empleado)) ? Response.ok("Agregada!").build():
				Response.accepted("El empleado ya existe!").build();
		}catch(Exception e) {
			return Response.accepted("Ya existe un empleado "
					+ "cuyo correo es indentico al ingresado").build();
		}
	}
	
	@GET
	@Path("/buscar/{idEmpleado}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarEmpleado(@PathParam("idEmpleado") int idEmpleado) {
		Empleado empleado = eejb.buscarEmpleado(idEmpleado);
		return empleado == null? Response.accepted("El empleado no existe!").build():
			Response.ok(empleado).build();
	}
	
	@GET
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response login(LoginDTO login) {
		Empleado empleado = eejb.loginEmpleado(login);
		return empleado == null? Response.accepted("El correo y/o contraseña suministrados están incorrectos.").build():
			Response.ok(empleado).build();
	}
}