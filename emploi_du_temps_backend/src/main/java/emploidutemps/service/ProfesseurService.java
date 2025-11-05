package emploidutemps.service;
import emploidutemps.model.Professeur;
import emploidutemps.repository.ProfesseurRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfesseurService {
	private final ProfesseurRepository repo;
	
	public ProfesseurService(ProfesseurRepository repo) {
		this.repo = repo;
	}
	public List<Professeur> getAll() {
		return repo.findAll();
	}
	public Professeur getById(long id) {
		return repo.findById(id).orElse(null);
	}
	 public Professeur save(Professeur professeur) {
	    return repo.save(professeur);
	 }

	 public void delete(long id) {
	    repo.deleteById(id);
	 }
}
