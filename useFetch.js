import { useEffect, useState } from "react";


const useFetch = (apiurl) => {

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    const[error, setError] = useState(null);

    
    function fetchData(){
        setTimeout(()=>{
            fetch(apiurl, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'X-Api-Key': 'd0a92982aa8544c2b50abcac64549c34',
                }})
                .then(res => {
                    if(res.status === 404){
                        throw Error("Resource could not be reached")
                    }
                    return res.json()
                })
                    .then(data => {
                        setData(data);
                        setLoading(false);
                        setError(null)
                    })
                        .catch(err => {
                            setError(err.message + '!')
                            setData(null);
                            setLoading(false);
                        })
        }, 2000)
        
    };

    useEffect(fetchData, [apiurl]);

    return {data, loading, error}
}
 
export default useFetch;