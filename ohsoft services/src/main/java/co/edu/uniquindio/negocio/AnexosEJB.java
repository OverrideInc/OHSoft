package co.edu.uniquindio.negocio;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import co.edu.uniquindio.dto.AnexosDocumentosDTO;
import co.edu.uniquindio.dto.DocumentosAnexosDTO;
import co.edu.uniquindio.entidades.Anexos;
import co.edu.uniquindio.entidades.Documentos;

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
	
	@EJB
	private DocumentosEJB dejb;
	
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
	
	public List<AnexosDocumentosDTO> listarPorAnexo(){
		List<AnexosDocumentosDTO> respuesta = new ArrayList<>();
		Query w = em.createNamedQuery(Anexos.LISTAR_ANEXOS);
		List<Anexos>anexos = w.getResultList();
		for(Anexos a: anexos){
			AnexosDocumentosDTO dto = new AnexosDocumentosDTO();
			dto.setIdAnexos(a.getIdAnexos());
			dto.setNombre(a.getNombre());
			dto.setDescripcion(a.getDescripcion());
			List<Documentos> docs = dejb.listarDocumentosPorAnexo(a.getIdAnexos());
			List<DocumentosAnexosDTO> documentos=new ArrayList<DocumentosAnexosDTO>();
			for(Documentos doc : docs){
				DocumentosAnexosDTO nuevo = new DocumentosAnexosDTO(doc.getIdDocumento(),doc.getNombre(),doc.getPeso());
				documentos.add(nuevo);
			}
			dto.setDocumentos(documentos);
			respuesta.add(dto);
		}
		return respuesta;
	}
	
}
