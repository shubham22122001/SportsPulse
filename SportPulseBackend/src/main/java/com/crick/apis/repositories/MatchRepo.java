package com.crick.apis.repositories;

import com.crick.apis.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//JpaRepository<FileYouWantToWorkWith,TypeOfThePrimaryKey>
public interface MatchRepo extends JpaRepository<Match,Integer> {
    //fetch match when teamHeading is provided(Custom)
    Optional<Match> findByTeamHeading(String teamHeading);

}
