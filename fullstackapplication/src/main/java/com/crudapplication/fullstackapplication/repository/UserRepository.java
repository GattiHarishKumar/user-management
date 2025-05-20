package com.crudapplication.fullstackapplication.repository;

import com.crudapplication.fullstackapplication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long>{

}
