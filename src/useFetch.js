import { useState, useEffect } from "react"

function useFetch (url){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/articles')
        .then(response => {
          return  response.json()
        })
        .then(data => {
            setData(data)
        })
    }, [url])
    return{data}
}

export default useFetch