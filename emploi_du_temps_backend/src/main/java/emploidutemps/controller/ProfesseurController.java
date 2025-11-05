package emploidutemps.controller;

import emploidutemps.model.Professeur;
import emploidutemps.service.ProfesseurService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/professeurs")
public class ProfesseurController {

    private final ProfesseurService service;

    public ProfesseurController(ProfesseurService service) {
        this.service = service;
    }

    @GetMapping
    public List<Professeur> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Professeur getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public Professeur create(@RequestBody Professeur professeur) {
        return service.save(professeur);
    }

    @PutMapping("/{id}")
    public Professeur update(@PathVariable Long id, @RequestBody Professeur professeur) {
        professeur.setId(id);
        return service.save(professeur);
    }

    @DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Long id) {
        service.delete(id);
    }
}
