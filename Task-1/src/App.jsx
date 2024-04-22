import React from 'react' ;
import './style.css'
import Card from './Components/Card';
import { data } from './data';



const App = () => {

  return (

    <div className='container'>
      {data.map(({id,title,desc}) => {
        return <Card 
        key={id}
        title={title}
        desc={desc}
        />
      })}
    </div>
  )
}


export default App ;