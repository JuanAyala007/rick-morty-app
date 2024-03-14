import { useRef } from "react"
import './styles/formSearch.css'


const FormSearch = ({setinputValue}) => {
    
    const inputsearch = useRef()

    const handleSummit = (e) => {
        e.preventDefault()
        setinputValue(inputsearch.current.value.trim())

    }
  return (
  <form className="form" onSubmit={handleSummit}>
    <input className="form-input"  ref={inputsearch} type="text" />
    <button className="form-buton">Search</button>
  </form>
  )
}

export default FormSearch