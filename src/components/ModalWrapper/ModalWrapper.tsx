import React, { ReactElement } from "react";
import styles from "./ModalWrapper.module.scss";

interface ModalWrapperProps {
  children: ReactElement;
  onClose?: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      {children}
    </div>
  );
};

export default ModalWrapper;
