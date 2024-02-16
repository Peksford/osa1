const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    return (
      <div>
        <div>{counter}</div>
        debugger
        <button onClick={() => setCounter(counter + 1)}>
          plus
        </button>
        <button onClick={() => setCounter(0)}> 
          zero
        </button>
      </div>
    )
  }