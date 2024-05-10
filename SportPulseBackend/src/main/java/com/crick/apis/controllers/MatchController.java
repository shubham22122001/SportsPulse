package com.crick.apis.controllers;

import com.crick.apis.entities.Match;
import com.crick.apis.services.MatchService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/match")
//@CrossOrigin is an annotation in Spring Framework used to enable Cross-Origin Resource Sharing (CORS) for specific endpoints
// or controllers. CORS is a security feature implemented by web browsers to restrict HTTP requests
// that are initiated from scripts running on one domain to resources located in another domain.
//@CrossOrigin in Spring is used to configure CORS policies for controllers or endpoints,
// allowing cross-origin requests from specified origins while maintaining security and preventing unauthorized access.

@CrossOrigin("*")
public class MatchController {
    private MatchService matchService;
    public MatchController(MatchService matchService) {
        this.matchService = matchService;
    }

    //get live matches
    @GetMapping("/live")
    public ResponseEntity<?> getLiveMatches() throws InterruptedException {
        System.out.println("getting live match");
        return new ResponseEntity<>(this.matchService.getLiveMatches(), HttpStatus.OK);
    }
    // get all matches
    @GetMapping
    public ResponseEntity<List<Match>> getAllMatches() {
        return new ResponseEntity<>(this.matchService.getAllMatches(), HttpStatus.OK);
    }
    @GetMapping("/point-table")
    public ResponseEntity<?> getPointsTable() {
        System.out.println("getting table");
        return new ResponseEntity<>(this.matchService.getPointsTable(), HttpStatus.OK);
    }

}
