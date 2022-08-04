import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({title,onAdd,showAdd}) => {
  const location = useLocation( )
  return (
    <header>
        <h1>{title}</h1>
       {location.pathname === '/' && <Button onClick={onAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} />}
    </header>
  )
}
Header.defaultProps={ //set default props
    title:'Task Tracker'
}
Header.propTypes={ //set props types
    title:PropTypes.string.isRequired
}
//CSS in JS
// const headingStyle = { 
//     color:'red',
//     backgroundColor:'black'
// }
export default Header