import React from 'react';
import styles from './styles.module.css';

export default function UnderConstruction(props: { text?: string }): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {props.text || "UNDER CONSTRUCTION"}
      </div>
    </div>
  );
}