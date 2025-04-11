// データ取得用フック
import { useState, useEffect } from 'react';

export function useFetch(url: string) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url).then(response => response.json()).then(setData);
    }, [url]);
    return data;
}
