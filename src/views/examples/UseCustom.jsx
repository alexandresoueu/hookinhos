import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../store/hooks/useCounter'

const UseRef = (props) => {

  const [count, decrement, increment] = useCounter()

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercise One"/>
            <div className="center">
              <span className="text">{count}</span>
              <div>
                <button className="btn" onClick={() => increment()}>+1</button>
                <button className="btn" onClick={() => decrement()}>-1</button>
              </div>
            </div>
        </div>
    )
}

export default UseRef
