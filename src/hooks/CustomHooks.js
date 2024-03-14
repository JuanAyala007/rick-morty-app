import { useState } from "react"
import axios from 'axios'


const CustomHooks = (url) => {
    const [response, setresponse] = useState()
    const [hasError, sethasError] = useState(false)

    const getApi = () => {
        axios.get(url)
        .then(res => {setresponse(res.data)
        sethasError(false)
    })
        .catch(err => {
            console.log(err)
        sethasError(true)})

    }
    return[response, getApi, hasError]
    
}

export default CustomHooks