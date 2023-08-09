import { createSlice } from "@reduxjs/toolkit";

const clientInitState ={
    clients:[],
    selectedClient:{},
}
const clientsSlice =createSlice({
    name:"clients",
    initialState:clientInitState,
    reducers:{
        setClients:(state,{payload})=>{
            state.clients = payload
        },
        setSelectedClient:(state,{payload})=>{
            state.selectedClient = payload
        }
    },
})
export const {setClients} = clientsSlice.actions
export const {setSelectedClient} = clientsSlice.actions
export const getAllClients  =(state)=>state.clients.clients
export const getSelectedClient =(state)=>state.clients.selectedClient
export default clientsSlice.reducer