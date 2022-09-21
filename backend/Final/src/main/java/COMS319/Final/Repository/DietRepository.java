package COMS319.Final.Repository;


import COMS319.Final.Model.Diet;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Madhav Dhimal
 */
public interface DietRepository extends JpaRepository<Diet, Long> {

    Diet findByName(String name);

}
