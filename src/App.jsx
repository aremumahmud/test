
import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Modal from './components/modal'


function App() {

  let [modal , setModal] = useState(false)
  let [ip , setIp] = useState(null)
  let [data, setData] = useState(null)


  async function showIP(){

     let req = await fetch('https://api.ipify.org?format=json')
     let res = await req.json()
     let ip = res?.ip

    //  let req1 = await fetch("http://localhost:3000/a?gt=70")
    //  let res1 = await req1.json()



     setIp(ip)
    //  setData(res1)
     setModal(true)
  }

  function CloseModal(){
    setModal(false)
    setIp(null)
  }

  


  return (
      <div className="container">
        {
          (modal && ip)?<Modal ip={ip} data={data} close={CloseModal} /> :''
        }
        
        <Header showmodal={showIP} />
        <Hero showip={showIP} />
      </div>
  )
}



export default App
