import { createSlice } from "@reduxjs/toolkit";

 
 const productSlice = createSlice({
   name: "notes",
   initialState:{
    todos:localStorage.getItem("notes")?JSON.parse(localStorage.getItem("notes")): []
   },
   reducers:{
    addNote:(state,action)=>{
      state.todos=[...state.todos,action.payload];
      localStorage.setItem('notes',JSON.stringify(state.todos)) ;

    },
deleteNote:(state,action)=>{
  state.todos=state.todos.filter((note)=>note.id!==action.payload);

  localStorage.setItem('notes',JSON.stringify(state.todos)) ;
},
searchNote: (state, action) => {
  state.todos=JSON.parse(localStorage.getItem("notes"))
  const searched = action.payload.toLowerCase();
  state.todos = state.todos.filter((note) =>
    note.title.toLowerCase().includes(searched)
  );
},

   }

 });
 export const {deleteNote,addNote,searchNote}=productSlice.actions
 export default productSlice.reducer