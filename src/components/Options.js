import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import tableStyles from './Table.module.css'
import styles from './Options.module.css'

import Title from './Title'
import RadioButton from './RadioButton'
import Checkbox from './Checkbox'

import { chooseTariff, toggleStaticIP } from '../redux/actions/tariff.actions'

const radioOptions = [
  { name: 'Тариф S', amount: 1000, caption: 'руб./мес.' },
  { name: 'Тариф M', amount: 2000, caption: 'руб./мес.' },
  {
    name: 'Тариф L (Статический IP адрес в составе пакета)',
    amount: 3000,
    caption: 'руб./мес.',
  },
]

class Options extends Component {
  handleTariffChange = tariff => {
    this.props.chooseTariff({ tariff })
  }

  render() {
    const { tariffState } = this.props
    const { tariff, addStaticIP } = tariffState

    return (
      <div className={styles.wrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <Title title="Выберите тариф" />

            {radioOptions &&
              radioOptions.map(option => (
                <RadioButton
                  key={option.name}
                  isActive={tariff.name === option.name}
                  option={option}
                  onChange={this.handleTariffChange}
                />
              ))}

            {!(
              tariff.name === 'Тариф L (Статический IP адрес в составе пакета)'
            ) && (
              <Fragment>
                <Title title="Выберите дополнительные опции" />
                <Checkbox
                  editable={true}
                  name="Подключение статического IP-адреса"
                  amount={145.5}
                  caption="руб."
                  checked={addStaticIP}
                  onChange={this.props.toggleStaticIP}
                />
                <Checkbox
                  editable={false}
                  name="Абонентская плата за статический IP-адрес"
                  amount={92}
                  caption="руб./мес."
                  checked={addStaticIP}
                />
              </Fragment>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tariffState: state.tariffReducer,
})

export default connect(
  mapStateToProps,
  { chooseTariff, toggleStaticIP }
)(Options)
