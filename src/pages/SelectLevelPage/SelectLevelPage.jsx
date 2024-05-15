import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useEasyModeContext } from "../../context/hooks/useEasyMode";
import { useLeaderContext } from "../../context/hooks/useLeader";

export function SelectLevelPage() {
  const { easyModeToggle } = useEasyModeContext();
  const { leaderboardModeOn, leaderboardModeOff } = useLeaderContext();
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li onClick={leaderboardModeOff} className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li onClick={leaderboardModeOff} className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li onClick={leaderboardModeOn} className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <label className={styles.easyMode}>
          <input className={styles.easyModeInput} onClick={easyModeToggle} type="checkbox" name="checkbox" />
          Легкий режим (3 жизни)
        </label>
        <Link to="/leaderboard">
          <div className={styles.linkLeaderboard}>Перейти к лидерборду</div>
        </Link>
      </div>
    </div>
  );
}
