import axios from "axios";
import { useEffect, useState } from "react"

const useCardHook = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    
    useEffect(() => {
        setLoading(true)
        axios('../TrendingAppData.json')
        .then(data => setData(data.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }, [])
    return {data, loading, error}
}
export default useCardHook;