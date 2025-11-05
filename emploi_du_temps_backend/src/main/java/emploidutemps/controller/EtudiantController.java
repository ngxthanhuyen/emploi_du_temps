package emploidutemps.controller;

import emploidutemps.model.Etudiant;
import emploidutemps.service.EtudiantService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/etudiants")
public class EtudiantController {
	private final EtudiantService service;
	public EtudiantController(EtudiantService service) {
		this.service = service;
	}
	@GetMapping
	public List<Etudiant> getAll() {
		return service.getAll();
	}
	@GetMapping("/{id}")
	public Etudiant getById(@PathVariable Long id) {
		return service.getById(id);
	}
	@PostMapping
	public Etudiant create(@RequestBody Etudiant etudiant) {
		return service.save(etudiant);
	}
	@PutMapping("/{id}")
	public Etudiant update(@PathVariable Long id, @RequestBody Etudiant etudiant) {
		etudiant.setId(id);
		return service.save(etudiant);
	}
	 @DeleteMapping("/{id}")
	 public void delete(@PathVariable("id") Long id) {
	    service.delete(id);
	}
}
