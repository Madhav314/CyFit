package COMS319.Final.Model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


/**
 * @author Madhav Dhimal
 */
@Entity
public class Workout {

    @Id
    @Column(name = "name")
    private String name;

    @Column(name = "videoLink")
    private String videoLink;

    @OneToMany(mappedBy = "Workout",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Muscle> muscles;

    @ManyToOne
    @JoinColumn(name = "Routine_id")
    @NotFound(action = NotFoundAction.IGNORE)
    private Routine Routine;

    public Workout(){
        muscles = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVideoLink() {
        return videoLink;
    }

    public void setVideoLink(String videoLink) {
        this.videoLink = videoLink;
    }

    public List<Muscle> getMuscle() {
        return muscles;
    }

    public void setMuscle(List<Muscle> muscle) {
        this.muscles = muscle;
    }
}
