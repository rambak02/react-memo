import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useLeaderContext } from "../../context/hooks/useLeader";

export const EndGameModal = ({ isWon, gameDurationSeconds, gameDurationMinutes, onClick }) => {
  const { leaderboardMode } = useLeaderContext();
  const title = leaderboardMode && isWon ? "Вы попали на Лидерборд" : isWon ? "Вы победили!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {leaderboardMode && isWon && <input className={styles.leaderName} type="text" placeholder="Пользователь"></input>}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>
      <Button className={styles.button} onClick={onClick}>
        Начать сначала
      </Button>
    </div>
  );
};
