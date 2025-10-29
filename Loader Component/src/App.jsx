
function Loader({progress}){
  return <div className="outer">
    <div className="inner" style={{
        transform: `translateX(${progress-100}%)`
    }}>{progress}%</div>
  </div>
}

function App(){
  return (<>
    <Loader progress={90}/>
  </>)
}

export default App;