package COMS319.Final.Repository;


import COMS319.Final.Model.Routine;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Madhav Dhimal
 */
public interface RoutineRepository extends JpaRepository<Routine, Long> {

    Routine findByName(String name);

}
