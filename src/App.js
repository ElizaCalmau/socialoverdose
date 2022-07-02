
import './App.css';
import Hat from './components/Hat/Hat'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Posts from './components/Posts/Posts'
import Messages from './components/Messages/Messages'
import {Routes, Route} from 'react-router-dom'

const App = (props) => {
  return(
    <div className='content-wrapper'>
      <Hat />
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path='/posts' element={<Posts posts={props.postsArray} dispatch={props.dispatch}/>} />
        <Route path='/messages' element={<Messages />} />
      </Routes>

    </div>
  )
}

export default App;
