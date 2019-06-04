import React from 'react'
import cn from 'classnames'
import tableStyles from './Table.module.css'
import Price from './Price'

const Checkbox = ({ editable, name, amount, caption, checked }) => (
  <tr>
    <td
      className={cn(tableStyles.field, {
        [tableStyles.fieldActive]: checked,
      })}
    >
      <label>
        {editable && (
          <input
            className={tableStyles.input}
            type="checkbox"
            checked={checked}
          />
        )}
        {name}
      </label>
    </td>
    <td
      className={cn(tableStyles.field, tableStyles.rightField, {
        [tableStyles.fieldActive]: checked,
      })}
    >
      <Price amount={amount} caption={caption} />
    </td>
  </tr>
)

export default Checkbox
