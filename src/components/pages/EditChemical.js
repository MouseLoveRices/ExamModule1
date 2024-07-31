
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'reactstrap';

export default function EditChemical() {
    const disPatch= useDispatch()
    const chemicals = useSelector(state=>state.chemicals)
  return (
    <div>
        {
            chemicals.map((item,index)=>{
                <Input type='text' placeholder={item.name} key={index}></Input>
            })
        }
      
    </div>
  )
}
