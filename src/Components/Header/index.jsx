import { useDispatch, useSelector } from 'react-redux'
import setTheme from '../../store/action'
import css from './header.css'

export default function Header(){
    const dispatch = useDispatch()
    return(
        <div className='Child'>
            <div onClick={()=> dispatch(setTheme('red'))} className='Childss' style={{backgroundColor:'red'}}></div>
            <div onClick={()=> dispatch(setTheme('green'))} className='Childss' style={{backgroundColor:'green'}}></div>
            <div onClick={()=> dispatch(setTheme('blue'))} className='Childss' style={{backgroundColor:'blue'}}></div>
        </div>
    )
}