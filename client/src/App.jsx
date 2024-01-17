import { useState } from 'react'
import './App.css'
import Card from './Card'

// Lot of repetition
// Hard coded
function App() {
  const [cards, setCards] = useState([{title:"Card 1", content:"content 1"}])

  const cardGenerator =()=>{
    const newObject = {
      title: `Card ${cards.length+1}`,
      content: `Content ${cards.length+1}`
    }
    setCards([...cards,newObject]);
  }
  return (
  <>
    <div classname= 'app' > 
          <button onClick={cardGenerator} > Card Generator </button>
         
      <div className='card-container' m-8 p-5>
        
          {cards.map((card,index)=>{
            return(
              <Card key={index} title={card.title} content={card.content}/>
            )
          })}
         </div>
      </div>
    </>
  )
}

export default App