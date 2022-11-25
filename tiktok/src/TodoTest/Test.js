import { useState } from 'react';


function App() {
  
  const [mo, setmo] =useState('');
  const [money, setmoney] = useState(() => {
    const getJson = JSON.parse(localStorage.getItem('itemMoney'))
    return getJson || [];
  } );

  let handleMoney = () => {
    setmoney(prev => {
      const newMoney= [...prev, mo];

      const jsonMoney =  JSON.stringify(newMoney);
      localStorage.setItem('itemMoney', jsonMoney)


      return newMoney
    });
    setmo('');
  }
  return (
    <div className="App" style={{ padding: 32 }}>
      <h1>Ô tao là ai ạ</h1>
      <input 
        value={mo}
        onChange={(e) => setmo(e.target.value)}
      />

      <button onClick={handleMoney}>Add</button>
      <ol>
        {money.map((money, index) => (
          <li key={index}>
            {money}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
