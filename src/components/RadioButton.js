import React from 'react'
import cn from 'classnames'

import tableStyles from './Table.module.css'

import Price from 'components/Price'

const RadioButton = ({ isActive, option, onChange }) => (
  <tr>
    <td
      className={cn(tableStyles.field, {
        [tableStyles.fieldActive]: isActive,
      })}
    >
      <label>
        <input
          className={tableStyles.input}
          name="tariff"
          type="radio"
          checked={isActive}
          onChange={() => onChange(option)}
        />
        {option.name}
      </label>
    </td>
    <td
      className={cn(tableStyles.field, tableStyles.rightField, {
        [tableStyles.fieldActive]: isActive,
      })}
    >
      <Price amount={option.amount} caption={option.caption} />
    </td>
  </tr>
)

export default RadioButton
