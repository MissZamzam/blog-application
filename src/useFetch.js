import { useState, useEffect } from "react"

function useFetch (){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/articles')
        .then(response => {
          return  response.json()
        })
        .then(data => {
            setData(data)
        })
    }, [])
    return{data}
}

export default useFetch