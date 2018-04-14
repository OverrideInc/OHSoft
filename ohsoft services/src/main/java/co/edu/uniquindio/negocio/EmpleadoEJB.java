package co.edu.uniquindio.negocio;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import co.edu.uniquindio.dto.LoginDTO;
import co.edu.uniquindio.entidades.Empleado;

@Stateless
public class EmpleadoEJB {

	@PersistenceContext(name = "persistencia")
	protected transient EntityManager em;

	public Empleado buscarEmpleado(int idEmpleado) {
		Query q = em.createNamedQuery(Empleado.BUSCAR_EMPLEADO);
		q.setParameter(1, idEmpleado);
		List<Empleado> result = q.getResultList();
		return result.size() == 0 ? null : result.get(0);
	}

	public boolean agregarEmpleado(Empleado Empleado) {
		if (buscarEmpleado(Empleado.getIdEmpleado()) == null) {
			em.persist(Empleado);
			return true;
		}
		return false;
	}
	
	public Empleado loginEmpleado(LoginDTO login) {
		Query q = em.createNamedQuery(Empleado.LOGIN_EMPLEADO);
		q.setParameter(1, login.getCorreo());
		q.setParameter(2, login.getPassword());
		List<Empleado> result = q.getResultList();
		return result.size() == 0 ? null : result.get(0);
	}

}
