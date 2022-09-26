import Editor from "./Editor"
import MultiVoiceTest from "./MultiVoiceTest"
import "./styles.css"

function App() {
  return (
    <div className='App'>
    <div className="logo-head">
    <img src={require('./loud.png')} />
    </div>
      <Editor />
    </div>
  )
}

export default App
