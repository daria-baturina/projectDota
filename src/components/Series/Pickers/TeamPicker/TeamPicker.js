import {useEffect, useState} from "react";
import styles from './TeamPicker.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {putTeamState} from "../../../../store/teamState";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const TeamPicker = () => {
  const [team, setTeam] = useState(null);
  const dispatch = useDispatch();
  const { teamsData }  = useSelector((state) => state.teams);


  const handleChange = (event) => {
    const teamName = event.target.value;
    const teamId = teamName === null ? null : teamsData.find(item => item.name === teamName);
    setTeam(teamId);
  };

  const updateTeamState = () => {
    dispatch(putTeamState(team))
  };

  useEffect(()=> {
    updateTeamState();
  }, [team]);

  return (
    <FormControl className={styles.wrapper}>
      <InputLabel id={styles.selectlabel}>Team</InputLabel>
      <Select
        labelId={styles.selectlabel}
        id={styles.select}
        value={team?.name}
        label="Team"
        onChange={handleChange}
      >
        <MenuItem value={null}>All Teams</MenuItem>
        <MenuItem value={'Team Spirit'}>Team Spirit</MenuItem>
        <MenuItem value={'Virtus.pro'}>Virtus.pro</MenuItem>
        <MenuItem value={'T1'}>T1</MenuItem>
        <MenuItem value={'Vici Gaming'}>Vici Gaming</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TeamPicker;