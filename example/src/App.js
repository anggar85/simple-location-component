import React, { useState } from 'react'

import LocationCX  from 'simple-location-component'
import 'simple-location-component/dist/index.css'

const App = () => {

  const [state, setState] = useState({country:"", state:"", city:""} );

  const onChange = (e) => {
      const {name, value} = e.target;
      // Update local state
      setState({
          ...state,
          [name]: value
      })
  }

  return (
    <LocationCX 
      cols="2" 
      data={state}
      onChange={onChange}  
      extraStyleClasses=""  
    />
  )
}

export default App
