import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
 
  function HandleClick() {
    alert('button clicked')
  }

  const HandleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5)
  }
  return (
    <>
      <h2>React Core Concept 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={HandleClick}>Click Me</button>
      <button onClick={HandleClick2}>Click2</button>

      <button onClick={() =>{alert('third clicked')}}>third</button>

      <button onClick={() => addToFive(5)}>Four</button>
    </>
  )
}

export default App
