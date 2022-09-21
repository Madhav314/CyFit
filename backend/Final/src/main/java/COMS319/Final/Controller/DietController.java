package COMS319.Final.Controller;

import COMS319.Final.Model.Diet;
import COMS319.Final.Model.Routine;
import COMS319.Final.Model.User;
import COMS319.Final.Repository.DietRepository;
import COMS319.Final.Repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Madhav Dhimal
 */
@RestController
public class DietController {

    @Autowired
    DietRepository dietRepository;

    @Autowired
    userRepository userRepository;

    private final String success = "{\"message\":\"success\"}";
    private final String failure = "{\"message\":\"failure\"}";

    @GetMapping(path = "/Diets")
    List<Diet> getRoutines(){
        return dietRepository.findAll();
    }

    @PostMapping(path = "/Diets/{email}/{name}")
    String addRoutine(@PathVariable String email, @PathVariable String name){

        if (email.equals(null) || name.equals(null)) {
            return "Not enough information";
        }
        else if (dietRepository.findByName(name) != null) {
            return "Diet already exists";
        }
        else if(userRepository.findByEmail(email) == null){
            return "User does not exist";
        }
        else {
            User user = userRepository.findByEmail(email);

            Diet diet = new Diet();

            diet.setName(name);

            user.getDiets().add(diet);

            diet.setUser(user);

            dietRepository.save(diet);

            return "Diet created";
        }
    }

}
