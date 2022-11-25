// import { useState } from "react";
import AppRouter from "./Router/AppRouter";


function App() {

  // const [show, setShow] = useState(false)


  return (
    <div className="App">
      {/* <button onClick={() => setShow(!show)}>Toogle</button>
      {show && <AppRouter/>} */}

      <AppRouter />
    </div>
  )
}

export default App;
