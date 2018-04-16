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
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import co.edu.uniquindio.entidades.Ciudad;
import co.edu.uniquindio.entidades.Empresa;
import co.edu.uniquindio.entidades.Telefono;
import co.edu.uniquindio.negocio.CiudadEJB;
import co.edu.uniquindio.negocio.TelefonoEJB;

@Path("/telefono")
@RequestScoped
public class TelefonoServices {
	
	@EJB
	private TelefonoEJB tejb;
	
	@POST
	@Path("/registrar")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response registrarTelefono(Telefono telefono) {
		return 	tejb.agregarTelefono(telefono)? 
				Response.ok().build() : 
				Response.noContent().build();
	}
	
	
	@GET
	@Path("/listar")
	@Produces(MediaType.APPLICATION_JSON)
	public Response listarCiudades() {
		List<Telefono> t = tejb.listarTelefono();
		return t == null ? Response.noContent().build() : 
			Response.ok(t).build();
	}
	
	@GET
	@Path("/buscar/{idTelefono}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarEmpresa(@PathParam("idTelefono") int idTelefono) {
		Telefono empresa = tejb.buscarTelefono(idTelefono);
		return empresa == null? Response.accepted("La empresa no existe!").build():
			Response.ok(empresa).build();
	}
	
}
