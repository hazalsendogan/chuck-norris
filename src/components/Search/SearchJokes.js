import React,{useEffect,useState} from 'react'
import Joke from './Joke';
import Search from './Search';

export default function SearchJokes() {
    const [queryString, setQueryString] = useState("");
    useEffect(() => {
        console.log(queryString);
    }, [queryString]);
  return (
    <section>
        <Search queryString={queryString} setQueryString={setQueryString} />
        <Joke queryString={queryString}/>
    </section>
  )
}
