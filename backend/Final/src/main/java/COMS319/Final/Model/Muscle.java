package COMS319.Final.Model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;


/**
 * @author Madhav Dhimal
 */
@Entity
public class Muscle {

    @Id
    @Column(name = "Muscle_name")
    private String Muscle_name;

    @ManyToOne
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "Workout_id")
    private Workout Workout;

    public Muscle(String name){
        this.Muscle_name = name;
    }

    public Muscle(){}

    public String getName() {
        return Muscle_name;
    }

    public void setName(String name) {
        this.Muscle_name = name;
    }

    public Workout getWorkout() {
        return Workout;
    }

    public void setWorkout(Workout workout) {
        this.Workout = workout;
    }


}
