package com.crick.apis.services;

import com.crick.apis.entities.Match;

import java.util.List;

//do loose coupling in future nomenclature of website from where we scrap data can be change so
public interface MatchService {
    //get all matches
    List<Match> getAllMatches();
    //get live matches
    List<Match> getLiveMatches();
    //get ipl2024 table
    List<List<String>> getPointsTable();
}
