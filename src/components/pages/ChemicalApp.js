import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Input, Table } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddChemical from './AddChemical';
import { changeName, deleteChemical, setIsEdit } from '../redux/chemicalSlice';
import SearchBar from './SearchBar';
import ChemicalItem from './ChemicalItem';

export default function ChemicalApp() {
    const disPatch = useDispatch()
    const chemicals = useSelector(state=>state.chemicals.chemicals)
    const edit = useSelector(state=>state.chemicals.isEdit)

    return (
    <>
        <Container>
            <h1>This is List Chemicals</h1>
            <AddChemical/>
            <ChemicalItem/>
            <SearchBar/>
        </Container> 
    </> 
  )
}
