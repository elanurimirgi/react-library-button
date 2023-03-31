import React from 'react'

import { FirstButton } from 'sharkio'
import 'sharkio/dist/index.css'

const App = () => {
  return(
  <>
    <FirstButton text="Button1" type="first"/>
    <br /><br />
    <FirstButton text="Button2 " type="second"/>
    <br /><br />
    <FirstButton text="Button3" type="third"/>
    <br /><br />
    
  </>
  )
}

export default App