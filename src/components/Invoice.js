import React, { Fragment } from 'react'
import cn from 'classnames'
import styles from './Invoice.module.css'

const rows = [
  { name: 'Тариф S', price: '1 000 руб./мес.' },
  { name: 'Подключение статического IP-адреса', price: '147.6 руб.' },
  { name: 'Абонентская плата за статический IP-адрес', price: '92 руб./мес.' },
]

const Invoice = () => (
  <Fragment>
    <div className={styles.topBlock}>
      <div className={styles.title}>Интернет для бизнеса</div>
      {rows.map(row => (
        <div key={row.name} className={styles.row}>
          <span className={styles.rowLeft}>{row.name}</span>
          <span className={styles.rowRight}>{row.price}</span>
        </div>
      ))}
    </div>
    <div className={styles.bottomBlock}>
      <div className={styles.title}>Итого</div>
      <div className={cn(styles.row, styles.boldRow)}>
        <span className={styles.rowLeft}>Плата за подключение</span>
        <span className={styles.rowRight}>147.6 руб.</span>
      </div>
      <div className={cn(styles.row, styles.boldRow)}>
        <span className={styles.rowLeft}>Ежемесячный платеж</span>
        <span className={styles.rowRight}>1 092 руб.</span>
      </div>
      <div className={cn(styles.row, styles.boldRow)}>
        <span className={styles.rowLeft}>Ежегодный платеж</span>
        <span className={styles.rowRight}>13 104 руб.</span>
      </div>
    </div>
  </Fragment>
)

export default Invoice
