import React from 'react'
import tableStyles from './Table.module.css'

const Title = ({ title }) => (
  <tr className={tableStyles.titleRow}>
    <td className={tableStyles.field} colSpan="2">
      {title}
    </td>
  </tr>
)

export default Title
