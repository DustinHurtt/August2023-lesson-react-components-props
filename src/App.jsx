
import './App.css'
import Navbar from './components/Navbar'
import Greetings from './components/Greetings'
import StudentCard from './components/StudentCard'
import Badge from './components/Badge'
import StudentList from './components/StudentList'

import ReactPlayer from 'react-player'

function App() {

  return (
    <div className="App">
      <Navbar />

      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing={true} volume={0}/>

      <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5"
        />


      <Greetings firstName="Harper" />
      <hr />
      <Greetings firstName="Michelle" />
      <hr />
      <Greetings firstName="Andrea" />

      <StudentList>
        <StudentCard name="Eva" week={7} info={{ city: 'BCN', course: 'WEB' }} />
        <StudentCard name="Mat" week={8} info={{ city: 'MIA', course: 'DATA' }} />
      </StudentList>


      <Badge badgeText="important" />
    </div>
  )
}

export default App
