import { CHOOSE_TARIFF, TOGGLE_STATIC_IP } from '../types/tariff.types'

export const chooseTariff = ({ tariff }) => dispatch =>
  dispatch({
    type: CHOOSE_TARIFF,
    payload: tariff,
  })

export const toggleStaticIP = () => dispatch =>
  dispatch({
    type: TOGGLE_STATIC_IP,
  })
