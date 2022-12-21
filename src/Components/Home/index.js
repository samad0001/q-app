import { SignIn } from '../firebase'
import css from '../../App.css'
import { useSelector } from 'react-redux'

export default function Home(){
    const theme = useSelector(state=> state.theme)

    return(
        
        <div style={{backgroundColor: theme}} className="child">
  <h1>
        Welcome To Q-App
       </h1>
       <button className="btn-1" onClick={()=>SignIn()}> Sign in</button>
        </div>
      
    )
}