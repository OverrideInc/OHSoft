package co.edu.uniquindio.negocio;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;


import co.edu.uniquindio.entidades.Documentos;
/**
 * 
 * @author Juan Jose Ramirez, Juan Camilo Correa Pacheco, Miguelangel Diaz Cabezas.
 * @version 1.0
 */
@Stateless
public class DocumentosEJB {
	//Manjeador de la persistencia (mysql).
	@PersistenceContext(name = "persistencia")
	protected transient EntityManager em;
	
	
	/**
	 * buscar la ciudad por si identificador si esta en la persistencia.
	 * @param idCiudad, identificador de la ciudad.
	 * @return, retorna la ciudad buscada.
	 */
	public Documentos buscarDocumento(int idDocumento){
        Query query = em.createNamedQuery(Documentos.BUSCAR_DOCUMENTO);	
        query.setParameter(1,idDocumento);
        List<Documentos> result = query.getResultList();
        return result.size() == 0? null : result.get(0);
	}
	/**
	 * agrega una ciudad en la persistencia.
	 * @param ciudad, ciudad agregar.
	 * @return, true si se agrego o false si ya existe en la persistencia.
	 */
	public boolean agregarDocumento(Documentos documento) {
		if(buscarDocumento(documento.getIdDocumento()) == null) {
			em.persist(documento);
			return true;
		}
		return false;
	}
	/**
	 * enlista los documentos que hay en la persistencia.
	 * @return, retorna la lista de la persistencia.
	 */
	public List<Documentos> listarDocumentos(){
		Query q = em.createNamedQuery(Documentos.LISTAR_DOCUMENTOS);
		List<Documentos> result = q.getResultList();
		return result;
	}
	
	public List<Documentos> listarPorAnexo(int idAnexo){
		Query q = em.createNamedQuery(Documentos.LISTAR_PORANEXO);
		q.setParameter(2, idAnexo);
		List<Documentos> result = q.getResultList();
		return result;
	}
}
