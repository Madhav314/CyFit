package COMS319.Final.Controller;

import COMS319.Final.Model.Workout;
import COMS319.Final.Repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Madhav Dhimal
 */
@RestController
public class WorkoutController {

    @Autowired
    WorkoutRepository workoutRepository;

    @GetMapping(path = "/workouts")
    List<Workout> getWorkouts(){
        return workoutRepository.findAll();
    }


    @PostMapping(path = "/workout/{Workout_name}/{VideoLink}")
    String addWorkout(@PathVariable String name, @PathVariable String VideoLink){

        if (name.equals(null) || VideoLink.equals(null)) {
            return "Not enough information";
        } else if (workoutRepository.findByName(name) != null) {
            return "Routine already exists";
        }
        else {
            Workout workout = new Workout();

            workout.setName(name);

            workout.setVideoLink(VideoLink);

            workoutRepository.save(workout);

            return "Workout created";
        }
    }

}
