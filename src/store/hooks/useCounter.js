import { useState } from 'react'

export const useCounter = (initialValue = 100) => {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count -1)
  }

  return [count, decrement, increment]
}