package COMS319.Final.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Madhav Dhimal
 */
@Entity
public class User {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @Column(name = "email")
    private String email;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @OneToMany(mappedBy = "User",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Routine> routines;

    @OneToMany(mappedBy = "User",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Diet> diets;



    public User(){
        routines = new ArrayList<>();
        diets = new ArrayList<>();
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRoutineList(List<Routine> routines) {
        this.routines = routines;
    }

    public List<Routine> getRoutines() {
        return routines;
    }

    public List<Diet> getDiets() {
        return diets;
    }
}