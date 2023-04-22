import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null)
  const [isPending,setIsPending] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const abortEnd = new AbortController()
    setTimeout(()=> {
      fetch(url,{ signal: abortEnd.signal })
      .then(res => {
        if(!res.ok){
          throw Error("Sorry can't get the informaion from resouresces")
        }
    return res.json()
       } )
      .then(data => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch(err =>{
        if(err.name === 'AbortError'){
           console.log('Fetch Aborted')
        }else{
          setError(err.message)
          setIsPending(false)
        }
      })
     },500)
     return  () => abortEnd.abort()
  },[url]);
  return({ data, isPending, error})
}
export default useFetch;