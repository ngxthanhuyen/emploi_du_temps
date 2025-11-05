package emploidutemps.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Cours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private LocalDateTime debut;
    private LocalDateTime fin;

    @ManyToOne
    private Professeur professeur;
    
    public Cours() {}

    //Une table de jointure "cours_etudiants"
    @ManyToMany
    @JoinTable(
        name = "cours_etudiants",
        joinColumns = @JoinColumn(name = "cours_id"),
        inverseJoinColumns = @JoinColumn(name = "etudiant_id")
    )
    private Set<Etudiant> etudiants = new HashSet<>();


    public Cours(String nom, LocalDateTime debut, LocalDateTime fin) {
        this.nom = nom;
        this.debut = debut;
        this.fin = fin;
    }

    // getters et setters
    public Long getId() { 
    	return id; 
    }
    
    public void setId(Long id) { 
    	this.id = id; 
    }

    public String getNom() { 
    	return nom; 
    }
    
    public void setNom(String nom) { 
    	this.nom = nom; 
    }

    public LocalDateTime getDebut() { 
    	return debut; 
    }
    
    public void setDebut(LocalDateTime debut) { 
    	this.debut = debut; 
    }

    public LocalDateTime getFin() { 
    	return fin; 
    }
    
    public void setFin(LocalDateTime fin) { 
    	this.fin = fin; 
    }

    public Professeur getProfesseur() { 
    	return professeur; 
    }
    
    public void setProfesseur(Professeur professeur) { 
    	this.professeur = professeur; 
    }

    public Set<Etudiant> getEtudiants() { 
    	return etudiants; 
    }
    
    public void setEtudiants(Set<Etudiant> etudiants) { 
    	this.etudiants = etudiants;
    }
}
