import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input } from 'reactstrap';
import { addNew, setFormula, setText } from '../redux/chemicalSlice';

export default function AddChemical() {
    const disPatch = useDispatch()
    const {text,formulaInput} = useSelector(state=>state.chemicals)
    const handleChangeName=(e) =>{
        disPatch(setText(e.target.value))
    }
    const handleChangeFormula=(e) =>{
        disPatch(setFormula(e.target.value))
    }
    const handleClick=(item)=>{
        disPatch(addNew(item.id))
    }
  return (
    <div>
        <Form>
        <Input type='text' placeholder='Type name chemical to add or search' value={text} onChange={handleChangeName}/>
        <Input type='text' placeholder='Type formula' value={formulaInput} onChange={handleChangeFormula}/>
        <Button onClick={handleClick} className='btn btn-success'>Add</Button>
        </Form>
    </div>
  )
}
