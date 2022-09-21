package COMS319.Final.Repository;

import COMS319.Final.Model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * @author Madhav Dhimal
 */
public interface WorkoutRepository extends JpaRepository<Workout,String> {

    Workout findByName(String Workout_name);

}
