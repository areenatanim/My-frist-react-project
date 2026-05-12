
import './App.css'
import Counter from './stste'
import Batting from './batting'

function App() {
  function handelClick() {
    alert("button clicked")
  }
  const handelClick3 = () => {
    alert("button 3 clicked")
  }
  const handelClick4 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <>



      <h3>Get Start with React</h3>

      <Batting></Batting>

      <Counter></Counter>

      <button className='button-style' onClick={handelClick}>Click Me</button>
      <button className='button-style' onClick={function handelClick2() {
        alert("second button clicked")
      }}>Click Me</button>
      <button className='button-style' onClick={handelClick3}>Button 3</button>
      <button className='button-style' onClick={() => alert("click 4")}>Button 4</button>
      <button className='button-style' onClick={() => handelClick4(50)}>Button ADD</button>
      <button className='button-style' onClick={() => handelClick4(8)}>Button ADD</button>
    </>
  )
}

export default App
