import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import styles from "./Leaderboard.module.css";
import { useLeaderContext } from "../../context/hooks/useLeader";
import { formatTime } from "../helpers/helpers";
import { achivmentsImages } from "../../utils/achivments";

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
        <div className={styles.columnItem}>Достижения</div>
        <div className={styles.columnItem}>Время</div>
      </div>
      {loaded ? (
        <ul className={styles.leaderboardList}>
          {leaders.map((leader, index) => (
            <div key={leader.id} className={styles.user}>
              <div className={styles.rating}>#{index + 1}</div>
              <div className={styles.userName}>{leader.name}</div>
              <div className={styles.achivments}>
                <img
                  src={leader.achievements.includes(1) ? achivmentsImages.enable[1] : achivmentsImages.disable[1]}
                  alt="achivka"
                />
                <img
                  src={leader.achievements.includes(2) ? achivmentsImages.enable[2] : achivmentsImages.disable[2]}
                  alt="achivka"
                />
              </div>
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
