import React from 'react'
import styles from './App.module.css'
import Options from 'components/Options'
import Invoice from 'components/Invoice'

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        <Options />
      </div>
      <div className={styles.rightColumn}>
        <Invoice />
      </div>
    </div>
  )
}

export default App
