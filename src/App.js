import './App.css';
import Form from './Components/Form/Form';

function App() {
  const submitHandler = (candyData) => {
    console.log(candyData)
  }
  return (
    <div className="App">
      <header className='color:red'>
        <h1>Candy Shop</h1>
      </header>
      <Form onSubmit={submitHandler}/>
    </div>
  );
}

export default App;
