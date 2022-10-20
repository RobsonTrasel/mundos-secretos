import '../styles/Game.css'

import React from 'react'

export default function Game({ verifyWord }) {
    return (
        <div>
          <h1>Game</h1>
          <button onClick={verifyWord} >Finalizar jogo!</button>
        </div>
    )
}
