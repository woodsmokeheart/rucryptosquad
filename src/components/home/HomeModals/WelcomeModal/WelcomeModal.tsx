import ModalWrapper from "@/components/ModalWrapper/ModalWrapper";
import React from "react";
import styles from "./WelcomeModal.module.scss";

interface WelcomeModalProps {
  onClose?: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <div className={styles.wrapper}>
        WelcomeModal <button onClick={onClose}>close</button>
      </div>
    </ModalWrapper>
  );
};

export default WelcomeModal;
