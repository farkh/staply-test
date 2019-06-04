import React from 'react'
import { Provider } from 'react-redux'

import styles from './App.module.css'
import Options from 'components/Options'
import Invoice from 'components/Invoice'

import store from './store'

store.subscribe(() => {
  localStorage.setItem('StaplyReduxState', JSON.stringify(store.getState()))
})

function App() {
  return (
    <Provider store={store}>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <Options />
        </div>
        <div className={styles.rightColumn}>
          <Invoice />
        </div>
      </div>
    </Provider>
  )
}

export default App
