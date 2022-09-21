package COMS319.Final.Repository;

import javax.transaction.Transactional;
import COMS319.Final.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Madhav Dhimal
 */
public interface userRepository extends JpaRepository<User, Long>{

    User findByEmail(String email);

    @Transactional
    String deleteByEmail(String email);

}
