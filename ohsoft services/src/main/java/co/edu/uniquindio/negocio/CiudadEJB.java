package co.edu.uniquindio.negocio;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import co.edu.uniquindio.entidades.Ciudad;

@Stateless
public class CiudadEJB {

	@PersistenceContext(name = "persistencia")
	protected transient EntityManager em;
	
	public Ciudad buscarCiudad(int idCiudad){
        Query query = em.createNamedQuery(Ciudad.BUSCAR_X_ID);	
        query.setParameter(1,idCiudad);
        List<Ciudad> result = query.getResultList();
        return result.size() == 0? null : result.get(0);
	}
	
	public boolean agregarCiudad(Ciudad ciudad) {
		if(buscarCiudad(ciudad.getIdCiudad()) == null) {
			em.persist(ciudad);
			return true;
		}
		return false;
	}
	
	public List<Ciudad> listarCiudades(){
		Query q = em.createNamedQuery(Ciudad.LISTAR_CIUDADES);
		List<Ciudad> result = q.getResultList();
		return result;
	}
}
