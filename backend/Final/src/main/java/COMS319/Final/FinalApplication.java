package COMS319.Final;

import COMS319.Final.Model.Diet;
import COMS319.Final.Model.Muscle;
import COMS319.Final.Model.User;
import COMS319.Final.Model.Workout;
import COMS319.Final.Repository.*;
import org.hibernate.jdbc.Work;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;

@SpringBootApplication
public class FinalApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinalApplication.class, args);
	}


	@Bean
	CommandLineRunner initUser(userRepository UserRepository, WorkoutRepository workoutRepository, RoutineRepository routineRepository, MuscleRepository muscleRepository, FoodRepository foodRepository, DietRepository dietRepository) {
		return args -> {

		/**
			ArrayList<Muscle> muscles = new ArrayList<>();
			ArrayList<Workout> workouts = new ArrayList<>();

			muscles.add(new Muscle("chest"));
			muscles.add(new Muscle("shoulders"));
			muscles.add(new Muscle("biceps"));
			muscles.add(new Muscle("triceps"));
			muscles.add(new Muscle("forearms"));
			muscles.add(new Muscle("traps"));
			muscles.add(new Muscle("abs"));
			muscles.add(new Muscle("back"));
			muscles.add(new Muscle("quads"));
			muscles.add(new Muscle("hamstrings"));
			muscles.add(new Muscle("calves"));

			for (int i = 0; i < muscles.size(); i++) {
				muscleRepository.findAll();
				if()

				muscleRepository.save(muscles.get(i));
			}

			for (int i = 0; i < workouts.size(); i++) {
				workoutRepository.save(workouts.get(i));
			}
		*/

		};
	}

}
