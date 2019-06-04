import React from 'react'
import tableStyles from './Table.module.css'
import styles from './Options.module.css'

import Title from './Title'
import RadioButton from './RadioButton'
import Checkbox from './Checkbox'

const radioOptions = [
  { name: 'Тариф S', amount: 1000, caption: 'руб./мес.' },
  { name: 'Тариф M', amount: 2000, caption: 'руб./мес.' },
  {
    name: 'Тариф L (Статический IP адрес в составе пакета)',
    amount: 3000,
    caption: 'руб./мес.',
  },
]

const Options = () => (
  <div className={styles.wrapper}>
    <table className={tableStyles.table}>
      <tbody>
        <Title title="Выберите тариф" />
        <RadioButton radioOptions={radioOptions} />
        <Title title="Выберите дополнительные опции" />
        <Checkbox
          editable={true}
          name="Подключение статического IP-адреса"
          amount={145.5}
          caption="руб."
          checked={true}
        />
        <Checkbox
          editable={false}
          name="Абонентская плата за статический IP-адрес"
          amount={92}
          caption="руб./мес."
          checked={true}
        />
      </tbody>
    </table>
  </div>
)

export default Options
