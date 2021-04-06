import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const calculateFactorial = num => {
  if( num < 0 ) return -1
  if( num === 0 ) return 1

  return calculateFactorial( num - 1 ) * num
}


const UseEffect = (props) => {
  const [ number, setNumber ] = useState(1)
  const [ factorial, setFactorial ] = useState(1)

  const [status, setStatus] = useState('ímpar')

  useEffect(() => {
    setFactorial(calculateFactorial(number))
  }, [number])

  useEffect(() => {
    setStatus(number % 2 === 0 ? 'Pair' : 'Odd')
  }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title='Exercise #01' />

            <div className="center">
              <div>
                <span className="text">Factorial: </span>
                <span className="text red">{factorial === -1 ? 'Do not exist' : factorial}</span>
              </div>
              <input
                type="number"
                className="input"
                value={number}
                onChange={event => setNumber(event.target.value)}
              />
              {number}
            </div>

            <SectionTitle title='Exercise #02' />
            <div className='center'>
              <div>
            <span className="text">Status: </span>
            <span className="text red">{status}</span>

              </div>
            </div>
            
        </div>
    )
}

export default UseEffect
