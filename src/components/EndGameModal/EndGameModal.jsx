import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useLeaderContext } from "../../context/hooks/useLeader";
import { addUser, getLeaders } from "../../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEasyModeContext } from "../../context/hooks/useEasyMode";

export const EndGameModal = ({ isWon, gameDurationSeconds, gameDurationMinutes, onClick, useEyes }) => {
  const { leaderboardMode, setLeaders } = useLeaderContext();
  const { easyGameMode } = useEasyModeContext();
  const time = gameDurationMinutes * 60 + gameDurationSeconds;
  const [username, setUsername] = useState("");
  const achievements = [];
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const addAchivments = () => {
    if (!easyGameMode) {
      achievements.push(1);
    }
    if (useEyes) {
      achievements.push(2);
    }
  };
  const handleUsername = async () => {
    if (leaderboardMode) {
      try {
        if (username === "") {
          setError("Укажите имя для лидербоарда");
        } else {
          addAchivments();
          const data = { name: username, time, achievements };
          await addUser(data);
          const response = await getLeaders();
          setLeaders(response.leaders);
          navigate("/leaderboard");
        }
      } catch (error) {
        setError(error.message);
      }
    } else {
      navigate("/leaderboard");
    }
  };
  const title = leaderboardMode && isWon ? "Вы попали на Лидерборд" : isWon ? "Вы победили!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {leaderboardMode && isWon && (
        <input
          className={styles.leaderName}
          onChange={e => setUsername(e.target.value)}
          type="text"
          placeholder="Пользователь"
          value={username}
        ></input>
      )}
      {error && <div className={styles.error}>{error}</div>}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>
      <Button className={styles.button} onClick={onClick}>
        Начать сначала
      </Button>
      <div onClick={handleUsername} className={styles.linkLeaderboard}>
        Перейти к лидерборду
      </div>
    </div>
  );
};
