import './App.css'
import Calculator from './components/Calculator'
import Content from './components/Content'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Bird Cage Size Calculator</h1>
        <p className="subtitle">Calculate the perfect cage dimensions for your feathered friends</p>
      </header>

      <main className="main-content">
        <Calculator />
        <Content />
      </main>

      <footer className="footer">
        <p>&copy; 2026 Bird Cage Size Calculator. Ensuring proper housing for happy, healthy birds.</p>
      </footer>
    </div>
  )
}

export default App
