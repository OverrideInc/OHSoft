package co.edu.uniquindio.negocio;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import co.edu.uniquindio.entidades.Empresa;

@Stateless
public class EmpresaEJB {
	
	@PersistenceContext(name = "persistencia")
	protected transient EntityManager em;
	
	public Empresa buscarEmpresa(int idEmpresa) {
		Query q = em.createNamedQuery(Empresa.BUSCAR_EMPRESA);
		q.setParameter(1, idEmpresa);
		List<Empresa> result = q.getResultList();
		return result.size() == 0? null : result.get(0);
	}
	
	public boolean agregarEmpresa(Empresa empresa) {
		if(buscarEmpresa(empresa.getIdEmpresa()) == null) {
			em.persist(empresa);
			return true;
		}
		return false;
	}
	
	public List<Empresa> listarEmpresas(){
		Query q = em.createNamedQuery(Empresa.LISTAR_EMPRESAS);
		List<Empresa> result = q.getResultList();
		return result;
	}

}
