import  { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont =new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data.reverse());
                    setLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name == 'AbourtError'){
                        console.log('fetch aborted')
                    }
                    setLoading(false);
                    setError(err.message);
                })
        }, 1000);

        return () => abortCont.abort();
    }, [url]);
    
    return { data, loading, error}
}

export default useFetch
