import { Data } from "./components/Data";
import { Card } from "./components/cards";


function App() {
  
  const showData = Data.map((pre) => {
    return (<Card data={pre} />)
  });

  return (
    <div className="App">
      <header className="App-header">
        <div style={{display:"flex" ,justifyContent:"center" , flexWrap:"wrap"}}>

        {showData}
        </div>
      </header>
    </div>
  );
}
export default App;
