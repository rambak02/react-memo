import { useRef, useState } from "react";
import eyes from "./images/Group 1077240074.png";
import styles from "./SuperPowerModal.module.css";

function openModal(setOpenModalSkill, timerIDRef) {
  timerIDRef.current = setTimeout(() => {
    setOpenModalSkill(true);
  }, 1000);
}

function closeModal(setOpenModalSkill, timerIDRef) {
  clearTimeout(timerIDRef.current);
  setOpenModalSkill(false);
}

export const SuperPowerModal = ({ useEyes, onClick }) => {
  //состояние наведение на суперсилу
  const [openModalSkill, setOpenModalSkill] = useState(false);
  const timerIDRef = useRef(null);
  return useEyes ? (
    <img className={styles.images} src={eyes} alt="eyes" />
  ) : (
    <div
      className={styles.SuperPower}
      onMouseLeave={() => closeModal(setOpenModalSkill, timerIDRef)}
      onMouseEnter={() => openModal(setOpenModalSkill, timerIDRef)}
    >
      <img src={eyes} alt="eyes" onClick={onClick} />
      {openModalSkill && (
        <>
          <div className={styles.container}>
            <div className={styles.title}>Прозрение</div>
            <div className={styles.text}>
              На 5 секунд показываются все карты. Таймер длительности игры на это время останавливается.
            </div>
          </div>
        </>
      )}
    </div>
  );
};
