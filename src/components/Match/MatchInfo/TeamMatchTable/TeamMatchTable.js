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

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650, bgcolor: 'text.disabled'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'common.white', fontSize: 25}} align="left">PLAYER</TableCell>
            <TableCell sx={{ color: 'common.white', fontSize: 25}} align="center">LVL</TableCell>
            <TableCell sx={{ color: 'common.white', fontSize: 25}} align="center">K/D/A</TableCell>
            <TableCell sx={{ color: 'common.white', fontSize: 25}} align="center">LH/DN</TableCell>
            <TableCell sx={{ color: 'common.white', fontSize: 25}} align="center">NET</TableCell>
            <TableCell sx={{ color: 'common.white', fontSize: 25}} align="center">GPM</TableCell>
            <TableCell sx={{ color: 'common.white', fontSize: 25}} align="center">XPM</TableCell>
            <TableCell sx={{ color: 'common.white', fontSize: 25}} align="center">HD</TableCell>
            <TableCell sx={{ color: 'common.white', fontSize: 25}} align="center">TD</TableCell>
            <TableCell sx={{ color: 'common.white', fontSize: 25}} align="center">HH</TableCell>
            <TableCell sx={{ color: 'common.white', fontSize: 25}} align="center">ITEMS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addedPlayers.map((player) => (
            <TableRow
              key={player.player_slot}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{fontSize: 16}} scope="row" align="center">
                <div className={styles.playerWrapper}>
                  <img src={player.url} alt='' className={styles.img} />
                  <div className={styles.playerName}>
                    <div className={styles.player_name}>{player.name}</div>
                    <div className={styles.hero}>{player.heroName}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell sx={{fontSize: 20}} align="center">{player.level}</TableCell>
              <TableCell sx={{fontSize: 20}} align="center">{player.kills}/{player.deaths}/{player.assists}</TableCell>
              <TableCell sx={{fontSize: 20}} align="center">{player.last_hits}/{player.denies}</TableCell>
              <TableCell sx={{fontSize: 20}} align="center">{player.new_net_worth}</TableCell>
              <TableCell sx={{fontSize: 20}} align="center">{player.gold_per_min}</TableCell>
              <TableCell sx={{fontSize: 20}} align="center">{player.xp_per_min}</TableCell>
              <TableCell sx={{fontSize: 20}} align="center">{player.new_hero_damage}</TableCell>
              <TableCell sx={{fontSize: 20}} align="center">{player.new_tower_damage}</TableCell>
              <TableCell sx={{fontSize: 20}} align="center">{player.new_hero_healing}</TableCell>
              <TableCell sx={{fontSize: 20}} align="left"><div>
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