import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const sum = (a, b) => {
  const waitTwoSeconds = Date.now() + 2000
  while(Date.now() < waitTwoSeconds) {}
  return a + b
}

const UseMemo = (props) => {
  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)
  const [three, setThree] = useState(0)

  // const [results, setResults] = useState(0)

  // useEffect(() => {
  //   setResults(sum(one,two))
  // }, [one, two])

  const result = useMemo(() => sum(one, two), [one, two])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <SectionTitle title='Exercise 1#' />

            <div className="center">
              <input
                type="number"
                className="input"
                value={one}
                onChange={event => setOne(parseInt(event.target.value))}
              />
              <input
                type="number"
                className="input"
                value={two}
                onChange={event => setTwo(parseInt(event.target.value))}
              />
              <input
                type="number"
                className="input"
                value={three}
                onChange={event => setThree(parseInt(event.target.value))}
              />
              <span>{result}</span>

            </div>
        </div>
    )
}

export default UseMemo
