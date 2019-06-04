import React, { Fragment } from 'react'
import cn from 'classnames'
import tableStyles from './Table.module.css'

import Price from 'components/Price'

const RadioButton = ({ radioOptions }) => (
  <Fragment>
    {radioOptions.map((option, index) => (
      <tr key={option.name}>
        <td
          className={cn(tableStyles.field, {
            [tableStyles.fieldActive]: !index,
          })}
        >
          <label>
            <input
              className={tableStyles.input}
              name="tariff"
              type="radio"
              checked={!index}
            />
            {option.name}
          </label>
        </td>
        <td
          className={cn(tableStyles.field, tableStyles.rightField, {
            [tableStyles.fieldActive]: !index,
          })}
        >
          <Price amount={option.amount} caption={option.caption} />
        </td>
      </tr>
    ))}
  </Fragment>
)

export default RadioButton
