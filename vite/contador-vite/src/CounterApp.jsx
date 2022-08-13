import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value)

  const aumentar = () => { setCounter(counter + 1) }
  const disminuir = () => { setCounter(counter - 1) }
  const resetear = () => { setCounter(value) }

  return (
    <>
    <h3>Contador ⏲ </h3>
    <h2>{ counter }</h2>
    <button onClick={ aumentar }>+1</button>
    <button onClick={ disminuir }>-1</button>
    <button onClick={ resetear }>Resetear</button>
    </>
  )
}

CounterApp.propTypes = {// este va con p minuscula
    value: PropTypes.number.isRequired
}