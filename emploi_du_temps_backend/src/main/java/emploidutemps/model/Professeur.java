package emploidutemps.model;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@JsonIgnoreProperties({"cours"}) // ignore la propriété cours lors de la désérialisation/serialization
@Entity
public class Professeur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenom;

    @JsonIgnore
    @OneToMany(mappedBy = "professeur")
    @JsonManagedReference
    private List<Cours> cours;

    public Professeur() {
    }
    
    public Professeur(String nom, String prenom) {
        this.nom = nom;
        this.prenom = prenom;
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

    public String getPrenom() { 
    	return prenom; 
    }
    
    public void setPrenom(String prenom) {
    	this.prenom = prenom; 
    }
}
