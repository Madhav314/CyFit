package COMS319.Final.Model;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;

/**
 * @author Madhav Dhimal
 */
@Entity
public class Food {

    @Id
    @Column(name = "name")
    private String name;

    @Column(name = "calories")
    private String calories;

    @ManyToOne
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "diet_ids")
    private Diet diet;

    public Food(String name, String  calories){
        this.name = name;
        this.calories = calories;
    }

    public Food(){

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCalories() {
        return calories;
    }

    public void setCalories(String calories) {
        this.calories = calories;
    }
}
