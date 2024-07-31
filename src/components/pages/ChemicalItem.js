
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Input, Table } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { changeName, deleteChemical, setIsEdit } from '../redux/chemicalSlice';



export default function ChemicalItem() {
    const disPatch = useDispatch()
    const chemicals = useSelector(state=>state.chemicals.chemicals)
    const edit = useSelector(state=>state.chemicals.isEdit)
  return (
    <div>
      <Table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Formula</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        chemicals.map((item,index)=>(
                            <tr key={index} >
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.formula}</td>
                                <td>
                                    <Button className='btn btn-danger' onClick={()=>disPatch(deleteChemical(item.id))}>Delete</Button>
                                    <Button className='btn btn-danger' onClick={()=>disPatch(changeName())}>change</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
           
            </Table>
    </div>
  )
}
