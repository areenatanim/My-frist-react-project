
import './App.css'
import Counter from './stste'
import Batting from './batting'
import Bolling from './bolling'
import Users from './users'
import { Suspense } from 'react'
import Friends from './friends'
import Post from './post'
import CountBtn from './button'
import AnimatedToggle from './toggle'


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const fetchFriends = async () => {
  const rest = fetch('https://jsonplaceholder.typicode.com/users')
  return (await rest).json();
}
const friendsPromise = fetchFriends();


const fetchPost = async () => {
  const rest = fetch('https://jsonplaceholder.typicode.com/posts');
  return (await rest).json();
}
const postPromise = fetchPost();




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
      <AnimatedToggle></AnimatedToggle>

      <Suspense fallback={<h2>Data Loading.......</h2>}>
        <CountBtn></CountBtn>
      </Suspense>

      <Suspense fallback={<h4 className='carde'>post are loading........</h4>}>
        <Post postPromise={postPromise}></Post>
      </Suspense>

      <Suspense fallback={<h2>Loading....</h2>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h2 className='carde'>Friends are coming......</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>



      <Batting></Batting>
      <Bolling></Bolling>
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
