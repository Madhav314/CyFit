package COMS319.Final.Repository;

import COMS319.Final.Model.Food;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Madhav Dhimal
 */
public interface FoodRepository extends JpaRepository<Food, Long> {

}
