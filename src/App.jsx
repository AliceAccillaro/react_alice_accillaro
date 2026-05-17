import './App.css'

function App() {
  return (
    <div>
      <h1 className="titolo">Esercizio React</h1>

      <label className="etichetta">Nome:</label>

      <input
        type="text"
        className="inputTesto"
        placeholder="Inserisci il tuo nome"
      />
    </div>
  )
}

export default App