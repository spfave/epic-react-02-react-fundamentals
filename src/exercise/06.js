// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input
  function handleSubmit(event) {
    event.preventDefault()

    // const username = event.target.elements.usernameInput.value // using DOM APIs
    // const username = usernameInputRef.current.value // using React ref
    onSubmitUsername(username) // using state variable
  }

  // Extra credit 1: get input value via a React ref
  // const usernameInputRef = React.useRef(null)

  // Extra credit 2: validate input as lower case
  // const [error, setError] = React.useState(null)
  // function handleChange(event) {
  //   const username = event.target.value
  //   const isLowercase = username === username.toLowerCase()
  //   setError(isLowercase ? null : 'Username must be lower case')
  // }

  // Extra credit 3: control input and modify
  const [username, setUsername] = React.useState('')
  function handleUsername(event) {
    setUsername(event.target.value.toLowerCase())
  }

  // 🐨 add the onSubmit handler to the <form> below
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        {/* DOM or ref */}
        {/* <input id="usernameInput" type="text" ref={usernameInputRef} /> */}
        {/* component state */}
        {/* <input id="usernameInput" type="text" onChange={handleChange} /> */}
        <input
          id="usernameInput"
          type="text"
          value={username}
          onChange={handleUsername}
        />
      </div>
      {/* <div role="alert">{error}</div> */}
      {/* <button type="submit" disabled={Boolean(error)}> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
