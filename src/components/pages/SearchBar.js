import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { filterChemical } from '../redux/chemicalSlice';

export default function SearchBar() {
    const disPatch = useDispatch()
    const chemicals = useSelector(state=>state.chemicals)
    const handleFliter=(text)=>{
        disPatch(filterChemical(text))
    }

  return (
    <div>
        <Button onClick={handleFliter} className='btn btn-success'>Search</Button>       
    </div>
  )
}
