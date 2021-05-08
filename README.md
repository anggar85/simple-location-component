# simple-location-component

> This is a super simple component that will give you country, state and let you write the city

[![NPM](https://img.shields.io/npm/v/simple-location-component.svg)](https://www.npmjs.com/package/simple-location-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-location-component
```

## Usage

```jsx
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

  // cols="2" Value of the columns in a row, considere the value for each one of the columns
  // data={state} Your state
  // onChange={onChange}  
  // extraStyleClasses=""  May be you need add extra color or someting

  return (
    <LocationCX 
      cols="2" // Value of the columns in a row, considere the value for each one of the columns
      data={state}
      onChange={onChange}  
      extraStyleClasses=""  
    />
  )
}

export default App
```

## License

MIT © [anggar85](https://github.com/anggar85)
