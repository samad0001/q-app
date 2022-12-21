import { async } from '@firebase/util'
import { useEffect } from 'react'
import { useState } from 'react'
import css from '../../App.css'
import { addCompanyToDb ,GetDataFromdb} from '../firebase/index'


export default function Form (){

//  let data = GetDataFromdb()
//   console.log('form wala----------',data)
       
   
    

   async function addDataTodb(){

    try{
        alert('hu raah')
    await addCompanyToDb(user)
    alert('hu gya')

    }
    catch(error){
        alert(error.message)
    }



    }





    const [user , setUser ] = useState({
        name : '',
        since : '',
        url : '',
        timming : '',
       
        
        
    
    })



    let name ,value ;
 const postDataTodb = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({...user , [name] : value})
    console.log(user)
 }



    return(
        <div className='child-1'>
            <form  >
        <label>
            Name Of The Company 
            <input className='input'  id='company' required onChange={postDataTodb} name='name' type={'text'} />
        </label>
        <label>
           Since
            <input className='input' name='since' required onChange={postDataTodb} type={'date'} />
        </label> <label>
          Certificate / Image Url
            <input className='input' name='url' required onChange={postDataTodb} type={'text'} />
        </label> <label>
        Timming
            <input className='input' name='timming' required onChange={postDataTodb} type={'time'} />
        </label>
       
        <br/>

            </form>
            <button  className='btn-1' onClick={ addDataTodb}  >add</button>

        </div>

    )
}


