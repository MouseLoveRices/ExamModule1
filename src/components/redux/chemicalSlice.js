import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    chemicals:[
        {id:1, name:"Hydrochloric Acid", formula:"HCL"},
        {id:2, name:"Sodium chloride", formula:"NaCL"},
        {id:3, name:"Ammonia", formula:"HCL"},
        {id:4, name:"Hydrochloric", formula:"NH3"},
        {id:5, name:"Ethanol", formula:"C2H5OH"}
    ],
    text:'',
    formulaInput:'',
    isEdit:false   
}
const chemicalSlice = createSlice({
    name:"chemicals",
    initialState,
    reducers:{
        setText(state,action){
            state.text= action.payload
        },
        setFormula(state,action){
            state.formulaInput=action.payload
        },
        addNew(state,action){
            const newId = state.chemicals.length > 0 ? state.chemicals.reduce((maxId,item)=>Math.max(maxId,item.id),0)+1:1
            let newList = state.chemicals.push({id:newId,name:state.text,formula:state.formulaInput})
            state.text=''
            state.formulaInput=''
        },
        deleteChemical(state,action){
            state.chemicals = state.chemicals.filter(item=>item.id !== action.payload)
        },
        filterChemical(state,action){
            state.chemicals = state.chemicals.filter(item=>item.name === state.text)
        },
        setIsEdit(state,action){
            state.isEdit= true
            console.log(state.isEdit)
        },
        changeName(state,action){
            if(state.text !== ''){
                state.chemicals.map((item,index)=>item.name = state.text)
            }else if(state.formulaInput !== ''){
                state.chemicals.map(item=>item.formula = state.formulaInput)
            }
        }
        

    }
})
export const {setText,setFormula,addNew,deleteChemical,filterChemical,setIsEdit,changeName} = chemicalSlice.actions
export default chemicalSlice.reducer;