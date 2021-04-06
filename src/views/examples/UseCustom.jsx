import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../store/hooks/useCounter'
import { useFetch } from '../../store/hooks/useFetch'

const UseRef = (props) => {

  const [count, decrement, increment] = useCounter()
  const url = 'http://files.cod3r.com.br/curso-react/estados.json'
  const response = useFetch(url)

  const showStates = states => {
    return states.map(item => <li key={item.nome}>{item.nome} -- {item.sigla}</li>)
  }

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

            <SectionTitle title='Exercise Two' />
            <div className="center">
              <ul>
                {!response.loading ? showStates(response.data) : false}
              </ul>
            </div>
        </div>
    )
}

export default UseRef
