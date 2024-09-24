import './App.css'
import BasicCard from './Components/Card'
import ResponsiveAppBar from './Components/Navigation'

function App() {

  return (
    <>
    <ResponsiveAppBar />
      <div >
        {[...Array(5)].map((_, index) => (
          <div style={{ margin: 10 }}>
            <BasicCard key={index} />

          </div>
        ))}
      </div>
    </>
  )
}

export default App
