package emploidutemps.service;
import emploidutemps.model.Cours;
import emploidutemps.repository.CoursRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoursService {
	private final CoursRepository repo;
	public CoursService(CoursRepository repo) {
		this.repo = repo;
	}
	public List<Cours> getAll() {
	    return repo.findAll();
	}

	public Cours getById(Long id) {
	    return repo.findById(id).orElse(null);
	}

	public Cours save(Cours cours) {
	     return repo.save(cours);
	}

	public void delete(Long id) {
	    repo.deleteById(id);
	}
}
