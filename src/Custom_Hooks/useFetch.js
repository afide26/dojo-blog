import {useState, useEffect} from 'react';

const useFetch = (url)=>{

    const [data,setData] = useState(null)
    const [isLoading,setLoading] = useState(true)
    const [error, setError] = useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error('could not fetch the data from the resource.')
                }
                return response.json()
            })
            .then(data => {
                console.log(data);
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch(err=>{
                console.log(err.message)
                setData(null)
                setLoading(false)
                setError(err.message)
            })
        },1000)
    },[url])
    return {data, isLoading, error}
}

export default useFetch;