import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'

import styles from './Invoice.module.css'

const staticIpOptions = [
  { name: 'Подключение статического IP-адреса', price: '145.5 руб.' },
  { name: 'Абонентская плата за статический IP-адрес', price: '92 руб./мес.' },
]

const Invoice = ({ tariffState }) => (
  <Fragment>
    <div className={styles.topBlock}>
      <div className={styles.title}>Интернет для бизнеса</div>

      <div key={tariffState.tariff.name} className={styles.row}>
        <span className={styles.rowLeft}>{tariffState.tariff.name}</span>
        <span className={styles.rowRight}>
          {tariffState.tariff.amount} {tariffState.tariff.caption}
        </span>
      </div>

      {tariffState.addStaticIP &&
        staticIpOptions &&
        staticIpOptions.map(row => (
          <div key={row.name} className={styles.row}>
            <span className={styles.rowLeft}>{row.name}</span>
            <span className={styles.rowRight}>{row.price}</span>
          </div>
        ))}
    </div>
    <div className={styles.bottomBlock}>
      <div className={styles.title}>Итого</div>
      {/* Смотрим стоимость вместо статичного IP на случай, если появятся новые услуги, */}
      {/* у которых есть плата за подключения */}
      {tariffState.totalConnectionPrice > 0 && (
        <div className={cn(styles.row, styles.boldRow)}>
          <span className={styles.rowLeft}>Плата за подключение</span>
          <span className={styles.rowRight}>
            {tariffState.totalConnectionPrice} руб.
          </span>
        </div>
      )}
      <div className={cn(styles.row, styles.boldRow)}>
        <span className={styles.rowLeft}>Ежемесячный платеж</span>
        <span className={styles.rowRight}>
          {tariffState.totalMonthlyPrice} руб.
        </span>
      </div>
      <div className={cn(styles.row, styles.boldRow)}>
        <span className={styles.rowLeft}>Ежегодный платеж</span>
        <span className={styles.rowRight}>
          {tariffState.totalMonthlyPrice * 12} руб.
        </span>
      </div>
    </div>
  </Fragment>
)

const mapStateToProps = state => ({
  tariffState: state.tariffReducer,
})

export default connect(mapStateToProps)(Invoice)
