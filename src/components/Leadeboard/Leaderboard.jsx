import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import styles from "./Leaderboard.module.css";
import { useLeaderContext } from "../../context/hooks/useLeader";
import { formatTime } from "../helpers/helpers";

export const Leaderboard = () => {
  const { leaders, setLeaders, loaded, leaderboardModeOn } = useLeaderContext();
  const newLeaders = leaders.sort((a, b) => {
    return a.time - b.time;
  });
  setLeaders(newLeaders);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Лидербоард</div>
        <Link to="/game/9">
          <Button onClick={leaderboardModeOn}>Начать игру</Button>
        </Link>
      </div>
      <div className={styles.columnTitle}>
        <div className={styles.columnItem}>Позиция</div>
        <div className={styles.columnItem}>Пользователь</div>
        <div className={styles.columnItem}>Время</div>
      </div>
      {loaded ? (
        <ul className={styles.leaderboardList}>
          {leaders.map((leader, index) => (
            <div key={leader.id} className={styles.user}>
              <div className={styles.rating}>#{index + 1}</div>
              <div className={styles.userName}>{leader.name}</div>
              <div className={styles.userTime}>{formatTime(leader.time)}</div>
            </div>
          ))}
        </ul>
      ) : (
        <div className={styles.loading}>Данные загружаются...</div>
      )}
    </div>
  );
};
