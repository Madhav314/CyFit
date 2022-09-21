package COMS319.Final.Controller;

import COMS319.Final.Model.User;
import COMS319.Final.Repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


/**
 * @author Madhav Dhimal
 */
@RestController
public class userController {

    @Autowired
    userRepository userRepository;

    @GetMapping(path = "/users")
    List<User> getUsers(){return userRepository.findAll();}

    @GetMapping(path = "/users/{email}")
    User getUserByEmail(@PathVariable String email){
        return userRepository.findByEmail(email);
    }

    @PostMapping(path = "/users/{email}/{username}/{password}")
    String createUser(@PathVariable String email, @PathVariable String username, @PathVariable String password) {
        if (email.equals(null) || username.equals(null) || password.equals(null)) {
            return "not enough information";
        } else if (userRepository.findByEmail(email) != null) {
            return "user already exists";
        } else {
            User user = new User();
            user.setEmail(email);
            user.setUsername(username);
            user.setPassword(password);
            userRepository.save(user);
            return "user created";
        }
    }

    @GetMapping(path = "/users/{email}/{password}")
    String login(@PathVariable String email, @PathVariable String password){
        if(userRepository.findByEmail(email) == null){
            return "account does not exist";
        }
        else if(!userRepository.findByEmail(email).getPassword().equals(password)){
            return "password does not match";
        }
        else{
            return "Logged in";
        }
    }

    @DeleteMapping(path = "/users/{email}")
    String deleteUserByEmail(@PathVariable String email){
        if(userRepository.findByEmail(email) == null){
            return "account does not exist";
        }
        else {
            userRepository.deleteByEmail(email);
        }
        return "deleted " + email + "'s account";
    }

}
