import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import List from './components/List'

function App() {
  const names = ['Alice', 'Marco', 'Giulia', 'Luca']

  return (
    <>
      <Navbar />
      <Header />
      <List names={names} />
    </>
  )
}

export default App