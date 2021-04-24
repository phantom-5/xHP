import './App.css';
import Story from './components/Story'
import Particles from 'react-particles-js'
import {useState, useRef, useEffect} from 'react'
import MediaQuery from 'react-responsive'
import Cookies from 'universal-cookie'


function App() {

  const [userInteracted,setUserInt] = useState(false)
  const [bookNo,setBookNo] = useState('1')
  const selectRef = useRef('')
  const speedRef = useRef('')
  const [speed,setSpeed] = useState(20)
  const cookie = new Cookies()

  
  const btnClick = () => {
    setBookNo(selectRef.current.value)
    setSpeed(parseInt(speedRef.current.value))
    setUserInt(true)
  }

  useEffect(()=>{
    console.log(cookie.get('hpexp'))
  },[])

  return (
    <div className="App">
      <MediaQuery orientation='landscape'>
       <Particles
            style={{ position: "absolute" }}
            height= "50%"
            width="100%"
            params={{
              particles: {
              shape: {
                type: 'images',
                image: [{src: 'test.png'},{src: 'test2.png'},{src: 'test3.png'}, {src: 'test4.png'},{src: 'test3.png'}]
              },
              line_linked: {
                  enable: false
              },
              number: {
                  value: 15
              },
              size: {
                  value: 20
              },
              opacity: {
                value: 0.8
              },
              move: {
                speed: 0.5
              }
          }
      }}
      />

      {!userInteracted && <div className="divD">
        <select className="form-select form-select-lg mb-3 btnD" aria-label=".form-select-lg" ref={selectRef}>
          <option value="1">Select Book</option>
          <option value="1">Philosopher's Stone</option>
          <option value="2">Chamber of Secrets</option>
          <option value="3">Prisoner of Azkaban</option>
          <option value="4">Goblet of Fire</option>
          <option value="5">Order of the Phoenix</option>
          <option value="6">Half-Blood Prince</option>
          <option value="7">Deathly Hallows</option>
        </select>
        &nbsp;
        <select className="form-select form-select-lg mb-3 btnD" aria-label=".form-select-lg" ref={speedRef}>
          <option value="20">Reading Speed</option>
          <option value="40">Slow</option>
          <option value="20">Medium</option>
          <option value="10">Fast</option>
        </select>
          <br/>
        <button  className="btn btn-success btnD" onClick={btnClick}>Experience</button>
        </div>
      }
      {userInteracted &&  <Story bookNo={bookNo} rSpeed={speed}/> }
      </MediaQuery>
      <MediaQuery orientation='portrait'>
      <Particles
            style={{ position: "absolute" }}
            height= "50%"
            width="100%"
            params={{
              particles: {
              shape: {
                type: 'images',
                image: [{src: 'test.png'},{src: 'test2.png'},{src: 'test3.png'}, {src: 'test4.png'},{src: 'test3.png'}]
              },
              line_linked: {
                  enable: false
              },
              number: {
                  value: 5
              },
              size: {
                  value: 15
              },
              opacity: {
                value: 0.5
              },
              move: {
                speed: 0.5
              }
          }
      }}
      />
       {!userInteracted && <div className="divM">
        <select className="form-select form-select-sm sm-3 btnM" aria-label=".form-select-sm" ref={selectRef}>
          <option selected>Select Book</option>
          <option value="1">Philosopher's Stone</option>
          <option value="2">Chamber of Secrets</option>
          <option value="3">Prisoner of Azkaban</option>
          <option value="4">Goblet of Fire</option>
          <option value="5">Order of the Phoenix</option>
          <option value="6">Half-Blood Prince</option>
          <option value="7">Deathly Hallows</option>
        </select>
        <select className="form-select form-select-sm sm-3 btnM" aria-label=".form-select-sm" ref={speedRef}>
          <option selected>Reading Speed</option>
          <option value="40">Slow</option>
          <option value="20">Medium</option>
          <option value="10">Fast</option>
        </select>
        <br/>
        <button  className="btn btn-success btnM" onClick={btnClick}>Experience</button>
        </div>
      }
      {userInteracted &&  <Story bookNo={bookNo} rSpeed={speed}/> }
      </MediaQuery>
    </div>
  );
}

export default App;
