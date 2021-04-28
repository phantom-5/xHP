import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Swal from 'sweetalert2'

window.addEventListener('orientationchange', ()=> {
  window.location.reload()
})

window.onoffline = async() => {
  var swal_notif = await Swal.fire({
    icon: 'error',
    title: 'No Internet!',
    text: 'Please check your internet connection.',
    showConfirmButton: true,
    confirmButtonText: 'Okay',
    confirmButtonColor: 'red'
  })
  if(swal_notif.isConfirmed || swal_notif.isDismissed){
  window.location.reload()
  }
}

var count = Math.floor((Math.random() * 13) + 1);
document.body.style.backgroundImage = "url('assets/landscape/"+count+".jpg')"
setInterval(()=>{
  document.body.style.backgroundImage = "url('assets/landscape/"+count+".jpg')"
  count+=1
  count%=13
  count+=1
},1000*60)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

