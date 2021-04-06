import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (stringOne, stringTwo) => {
  return [...stringOne].map((element, index) => {
    return `${element}${stringTwo[index] || ''}`
  }).join('')
}

const UseRef = (props) => {
    const [valueOne, setValueOne] = useState('')
    const [valueTwo, setValueTwo] = useState('')

    const count = useRef(0)

    const firstInput = useRef(null)
    const secondInput = useRef(null)

    useEffect(() => {
      count.current = count.current + 1
      secondInput.current.focus()
    }, [valueOne])

    useEffect(() => {
      count.current = count.current++
      firstInput.current.focus()
    }, [valueTwo])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title='Exercise #1' />
            <div className="center">
              <div>
                <span className="text">Value: </span>
                <span className="text">{merge(valueOne,valueTwo)} [</span>
                <span className="text red">{count.current}</span>
                <span className="text">]</span>
              </div>
              <input
                type="text"
                className="input"
                ref={firstInput}
                value={valueOne}
                onChange={event => setValueOne(event.target.value)}
              />
            </div>

            <SectionTitle title='Exercise #2'/>
            <div className="center">
              <input
                type="text"
                className="input"
                ref={secondInput}
                value={valueTwo}
                onChange={event => setValueTwo(event.target.value)}
              />
            </div>
        </div>
    )
}

export default UseRef
