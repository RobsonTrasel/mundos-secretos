import '../styles/GameOver.css'

import React from 'react'

export default function GameOver({ retry }) {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={retry}>Tentar novamente</button>
    </div>
  )
}
