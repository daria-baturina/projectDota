import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './TeamMatchTable.module.scss';
import {useSelector} from "react-redux";


const TeamMatchTable = ({players}) => {

  const { teamsData } = useSelector((state) => state.teams);
  const { heroesData } = useSelector((state) => state.heroes);
  const { itemsData } = useSelector((state) => state.items);

  const convertToK = (numbers) => {
    const coversNumbers = numbers < 1000
      ? numbers
      : `${Math.round(numbers/100)/10}k`
    return coversNumbers;
  }

  const itemsArr = Object.entries(itemsData);
  console.log(itemsArr);

  let addedPlayers = players.map((player) => {
    const id = player.hero_id;
    const img = `https://steamcdn-a.akamaihd.net${heroesData[id].img}`;
    const localized_name = heroesData[id].localized_name;
    const new_net_worth = convertToK(player.net_worth);
    const new_hero_damage = convertToK(player.hero_damage);
    const new_tower_damage = convertToK(player.tower_damage);
    const new_hero_healing = convertToK(player.hero_healing);
    const items = [];
    const findItemsUrl = (itemId) => {
      const itemArr = itemsArr.find(item => item[1].id === itemId);
      if (itemArr !== undefined) {
        items.push(`https://steamcdn-a.akamaihd.net${itemArr[1].img}`)
      }
    }
    findItemsUrl(player.item_0);
    findItemsUrl(player.item_1);
    findItemsUrl(player.item_2);
    findItemsUrl(player.item_3);
    findItemsUrl(player.item_4);
    findItemsUrl(player.item_5);

    return {
      url: img,
      heroName: localized_name,
      new_net_worth: new_net_worth,
      new_hero_damage: new_hero_damage,
      new_tower_damage: new_tower_damage,
      new_hero_healing: new_hero_healing,
      items: items,
      ...player
    };
  });

  console.log(addedPlayers);

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650, bgcolor: 'text.disabled'  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">PLAYER</TableCell>
            <TableCell align="center">LVL</TableCell>
            <TableCell align="center">K/D/A</TableCell>
            <TableCell align="center">LH/DN</TableCell>
            <TableCell align="center">NET</TableCell>
            <TableCell align="center">GPM</TableCell>
            <TableCell align="center">XPM</TableCell>
            <TableCell align="center">HD</TableCell>
            <TableCell align="center">TD</TableCell>
            <TableCell align="center">HH</TableCell>
            <TableCell align="center">ITEMS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addedPlayers.map((player) => (
            <TableRow
              key={player.player_slot}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope="row" align="center">
                <div className={styles.playerWrapper}>
                  <img src={player.url} alt='' className={styles.img} />
                  <div className={styles.playerName}>
                    <div className={styles.player_name}>{player.name}</div>
                    <div className={styles.hero}>{player.heroName}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell align="center">{player.level}</TableCell>
              <TableCell align="center">{player.kills}/{player.deaths}/{player.assists}</TableCell>
              <TableCell align="center">{player.last_hits}/{player.denies}</TableCell>
              <TableCell align="center">{player.new_net_worth}</TableCell>
              <TableCell align="center">{player.gold_per_min}</TableCell>
              <TableCell align="center">{player.xp_per_min}</TableCell>
              <TableCell align="center">{player.new_hero_damage}</TableCell>
              <TableCell align="center">{player.new_tower_damage}</TableCell>
              <TableCell align="center">{player.new_hero_healing}</TableCell>
              <TableCell align="left"><div>
                {player.items.map((url) => {
                  return (
                    <img alt='item' src={url} className={styles.item}/>
                  );
                })}
              </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamMatchTable;