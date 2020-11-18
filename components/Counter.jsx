/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    console.log(`Setting count: ${count}`)
  }, [count])

  return (
    <div>
      <button type='button' onClick={() => setCount((prev) => prev + 1)}>
        Add
      </button>
      <p>Count: {count}</p>
    </div>
  )
}

Counter.propTypes = {
  initialCount: PropTypes.number,
}

export default Counter
