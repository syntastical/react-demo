import { useState } from 'react'
import App from './App'

export default function blah(props) {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    return(
        <div>
            <button type="button" onClick={() => setCount1((count) => count + 1)}>
                count is: {count1}
            </button>
            <App value1={count1} />
            <App value1={count1} />
            {/*<button type="button" onClick={() => setCount2((count) => count + 1)}>*/}
            {/*    count is: {count2}*/}
            {/*</button>*/}
        </div>
    )
}