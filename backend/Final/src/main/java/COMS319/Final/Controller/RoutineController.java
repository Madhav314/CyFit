package COMS319.Final.Controller;

import COMS319.Final.Model.Routine;
import COMS319.Final.Model.User;
import COMS319.Final.Repository.RoutineRepository;
import COMS319.Final.Repository.userRepository;
import COMS319.Final.holders.UserAndRoutine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * @author Madhav Dhimal
 */
@RestController
public class RoutineController {

    @Autowired
    RoutineRepository routineRepository;

    @Autowired
    userRepository userRepository;

    private final String success = "{\"message\":\"success\"}";
    private final String failure = "{\"message\":\"failure\"}";

    @GetMapping(path = "/Routines")
    List<Routine> getRoutines(){
        return routineRepository.findAll();
    }

    @PostMapping(path = "/Routines/{email}/{name}")
    String addRoutine(@PathVariable String email, @PathVariable String name){

        if (email.equals(null) || name.equals(null)) {
            return "Not enough information";
        } else if (routineRepository.findByName(name) != null) {
            return "Routine already exists";
        }
        else if(userRepository.findByEmail(email) == null){
            return "User does not exist";
        }
        else {
            User user = userRepository.findByEmail(email);

            Routine routine = new Routine();

            routine.setName(name);

            user.getRoutines().add(routine);

            routine.setUser(user);

            routineRepository.save(routine);

            return "Routine created";
        }
    }

}
