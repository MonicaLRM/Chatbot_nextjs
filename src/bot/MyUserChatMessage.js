import React, { useState } from 'react';
import styles from '../app/page.module.css';

export default function MyUserChatMessage(props) {
    const est = props.pref;
    console.log(est);
  return (
    <div className={styles.user} >hola,yo lo se</div>
  );
}
