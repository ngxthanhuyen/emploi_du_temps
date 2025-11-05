package emploidutemps.model;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"cours"}) // ignore la propriété cours lors de la désérialisation/serialization
public class Etudiant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenom;
    private String dateNaissance;
    private String classe;

    @ManyToMany(mappedBy = "etudiants")
    @JsonIgnore
    private Set<Cours> cours = new HashSet<>();

    public Etudiant() {}

    public Etudiant(String nom, String prenom, String dateNaissance, String classe) {
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
    
    public String getDateNaissance() {
    	return dateNaissance;
    }
    
    public void setDateNaissance(String dateNaissance) {
    	this.dateNaissance = dateNaissance;
    }
    
    public String getClasse() {
    	return classe;
    }
    
    public void setClasse(String classe) {
    	this.classe = classe;
    }

    public Set<Cours> getCours() {
    	return cours; 
    }
    public void setCours(Set<Cours> cours) { 
    	this.cours = cours; 
    }
}
