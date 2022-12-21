import { useSelector } from "react-redux"
import Tabel from "../table"

export default function Token(){
    const theme = useSelector(state=> state.theme)
    return(
        <div className="parent" style={{backgroundColor:theme,margin:'0 auto' , textAlign:'center'}}>
            <h2>TOKENS</h2>
            
        </div>
    )
}