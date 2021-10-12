import {configureStore} from "@reduxjs/toolkit";
import teamsReducer from "./teams";
import leagueReducer from "./league";
import matchReducer from "./match";
import heroesReducer from "./heroes";
import itemsReducer from "./items";
import teamsPickReducer from "./teamState";
import datePickReducer from "./dateState";

const store = configureStore({
  reducer: {
    league: leagueReducer,
    teams: teamsReducer,
    match: matchReducer,
    heroes: heroesReducer,
    items: itemsReducer,
    teamsPick: teamsPickReducer,
    datePick: datePickReducer,
  }
})

export default store;
