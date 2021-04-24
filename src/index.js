import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.addEventListener('orientationchange', ()=> {
  window.location.reload()
})

var count = 1
setInterval(()=>{
  console.log(count)
  document.body.style.backgroundImage = "url('assets/landscape/"+count+".jpg')"
  count+=1
  count%=9
  count+=1
},10000)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

