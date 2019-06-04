import { CHOOSE_TARIFF, TOGGLE_STATIC_IP } from '../types/tariff.types'

const initialState = {
  tariff: { name: 'Тариф S', amount: 1000, caption: 'руб./мес.' },
  addStaticIP: false,
  totalMonthlyPrice: 0,
  totalConnectionPrice: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_TARIFF:
      // Лучше юзать код услуги (но его нет и я не уверен, что можно добавить по условиям задания :)
      let addStaticIP = state.addStaticIP
      let newTotalMonthlyPrice = state.totalMonthlyPrice
      let newTotalConnectionPrice = state.totalConnectionPrice

      if (
        action.payload.name ===
        'Тариф L (Статический IP адрес в составе пакета)'
      ) {
        newTotalMonthlyPrice = 0
        newTotalConnectionPrice = 0
        addStaticIP = false
      }

      newTotalMonthlyPrice = action.payload.amount

      if (addStaticIP) newTotalMonthlyPrice += 92

      return {
        ...state,
        tariff: action.payload,
        totalConnectionPrice: newTotalConnectionPrice,
        totalMonthlyPrice: newTotalMonthlyPrice,
        addStaticIP,
      }
    case TOGGLE_STATIC_IP:
      const totalMonthlyPrice = state.addStaticIP
        ? state.totalMonthlyPrice - 92
        : state.totalMonthlyPrice + 92
      const totalConnectionPrice = state.addStaticIP
        ? state.totalConnectionPrice - 145.5
        : state.totalConnectionPrice + 145.5

      return {
        ...state,
        addStaticIP: !state.addStaticIP,
        totalMonthlyPrice,
        totalConnectionPrice,
      }
    default:
      return state
  }
}
