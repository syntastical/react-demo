export function blah(props) {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    return(
        <App value1={123} user={MYVALUE}/>
        <button type="button" onClick={() => setCount1((count) => count + 1)}>
            count is: {count1}
        </button>
        <App value1={234} user={MYVALUE}/>
        <button type="button" onClick={() => setCount2((count) => count + 1)}>
            count is: {count2}
        </button>
    )
}

export const name = "sean"

export default blah;