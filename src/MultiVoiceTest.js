import { useSpeechSynthesis } from "react-recipes"
import { useState } from "react"

const MultiVoiceTest = () => {
  const [value, setValue] = useState("")
  const [ended, setEnded] = useState(false)
  const onBoundary = (event) => {
    console.log(
      `${event.name} boundary reached after ${event.elapsedTime} milliseconds.`
    )
  }
  const onEnd = () => setEnded(true)
  const onError = (event) => {
    console.warn(event)
  }

  const { cancel, speak, speaking, supported, voices, pause, resume } =
    useSpeechSynthesis({
      onEnd,
      onBoundary,
      onError,
    })

  if (!supported) {
    return "Speech is not supported. Upgrade your browser"
  }

  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type='button'
        onClick={() => speak({ text: value, voice: voices[1] })}
      >
        Speak
      </button>
      <button type='button' onClick={cancel}>
        Cancel
      </button>
      <button type='button' onClick={pause}>
        Pause
      </button>
      <button type='button' onClick={resume}>
        Resume
      </button>
      <p>{speaking && "Voice is speaking"}</p>
      <p>{ended && "Voice has ended"}</p>
      <div>
        <h2>Voices:</h2>
        <div>
          {voices.map((voice) => (
            <p key={voice.name}>{voice.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MultiVoiceTest
