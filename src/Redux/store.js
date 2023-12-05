import React from 'react'
import productSlice from "../Slice/slice"
import { configureStore } from '@reduxjs/toolkit'
const store=configureStore({
    reducer:{
        todos:productSlice
        
   

    }
})

export default store
