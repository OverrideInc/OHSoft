package co.edu.uniquindio.services;

import java.sql.SQLException;
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

import co.edu.uniquindio.entidades.Empresa;
import co.edu.uniquindio.negocio.EmpresaEJB;

@Path("/empresa")
@RequestScoped
public class EmpresaServices {
	
	@EJB
	private EmpresaEJB eejb;
	
	@POST
	@Path("/registrar")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response registrarEmpresa(Empresa empresa) {
		try {
			return (eejb.agregarEmpresa(empresa)) ? Response.ok("Agregada!").build():
				Response.accepted("La empresa ya existe!").build();
		}catch(Exception e) {
			return Response.accepted("Ya existe una empresa "
					+ "cuyo NIT o correo es indentico al ingresado").build();
		}
	}
	
	@GET
	@Path("/buscar/{idEmpresa}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarEmpresa(@PathParam("idEmpresa") int idEmpresa) {
		Empresa empresa = eejb.buscarEmpresa(idEmpresa);
		return empresa == null? Response.accepted("La empresa no existe!").build():
			Response.ok(empresa).build();
	}
	
	@GET
	@Path("/listar")
	@Produces(MediaType.APPLICATION_JSON)
	public Response listarEmpresa() {
		List<Empresa> empresa = eejb.listarEmpresas();
		return empresa.size() == 0? Response.accepted("No hay empresas").build():
			Response.ok(empresa).build();
	}
}
