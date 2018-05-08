package co.edu.uniquindio.negocio;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import co.edu.uniquindio.entidades.Anexos;

/**
 * 
 * @author Juan Jose Ramirez, Juan Camilo Correa Pacheco, Miguelangel Diaz Cabezas.
 * @version 1.0
 */
@Stateless
public class AnexosEJB {
	//Manjeador de la persistencia (mysql).
	@PersistenceContext(name = "persistencia")
	protected transient EntityManager em;
	
	/**
	 * buscar el anexo por si identificador si esta en la persistencia.
	 * @param idCiudad, identificador de la ciudad.
	 * @return, retorna la ciudad buscada.
	 */
	public Anexos buscarAnexo(int idAnexo){
        Query query = em.createNamedQuery(Anexos.BUSCAR_X_ID);	
        query.setParameter(1,idAnexo);
        List<Anexos> result = query.getResultList();
        return result.size() == 0? null : result.get(0);
	}
	/**
	 * agrega una ciudad en la persistencia.
	 * @param ciudad, ciudad agregar.
	 * @return, true si se agrego o false si ya existe en la persistencia.
	 */
	public boolean agregarAnexo(Anexos anexo) {
		if(buscarAnexo(anexo.getIdAnexos()) == null) {
			em.persist(anexo);
			return true;
		}
		return false;
	}
	/**
	 * enlista las ciudades que hay en la persistencia.
	 * @return, retorna la lista de la persistencia.
	 */
	public List<Anexos> listarAnexo(){
		Query q = em.createNamedQuery(Anexos.LISTAR_ANEXOS);
		List<Anexos> result = q.getResultList();
		return result;
	}
}
