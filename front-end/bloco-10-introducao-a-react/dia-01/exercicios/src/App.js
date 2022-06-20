import './App.css';

const Task = (chave, value) => {
  return (
    <li key={chave}>{value}</li>
  );
}

function App() {
  const commitment = ['Compreender melhor a lógica', 'Dominar o React', 'Dominar conceitos básicos do JS'];

  return (
    <>
      { 
        commitment.map((item) => Task(item, item))
      }
    </>
  );
}

export default App;
