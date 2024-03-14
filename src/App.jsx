import { useEffect, useState } from 'react'
import './App.css'
import CustomHooks from './hooks/CustomHooks'
import getRandomNumber from './services/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch.jsx'

function App() {
  const randomLocation = getRandomNumber(126)
  const [inputValue, setinputValue] = useState(randomLocation)

  const url = `https://rickandmortyapi.com/api/location/${inputValue || getRandomNumber(126)}`
  const [location, getLocation, hasError] = CustomHooks(url)

  useEffect(() => {
    getLocation()

  }, [inputValue])



  return (
   <div className='app'>
    <header  className='banner'>
      <img src="banner 2.png" alt="" />
      </header>
    <FormSearch  setinputValue = {setinputValue}/>
    {
      hasError
        ? <div className='err'>

              <figure className='banner-contain'>
                <img src="error.jpeg" alt="" />
              </figure>

                   <p className='banner-text'> Hey, solo digitos de 1 a 126 🤦‍♀️ </p> 

        </div>
      

      : (
    <> 
    <LocationInfo
    location = {location}
    />
    <div className='container-resident'>
      {
        location?.residents.map(url => (
          <ResidentCard 
          key={url}
          url = {url}/>
        ))
      }
    </div> 
    </>

       )
    }
   </div>
  )
}

export default App
