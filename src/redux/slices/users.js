// slices hace referencia a "porcion del estado"
// en redux pueden haber varios slices, uno para los usuarios, otro para los productos, es una parte del estado

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: 'users',      // nombre de esta parte del estado, es decir de este slice
    initialState: {
        list: []
    },
    reducers: {                             // aca agregamos las actions
        setUserList: (state,action)=>{      // esta es una action
            state.list = action.payload;    // el state guarda el valor de initialState como en redux normal
                                            // action.payload guarda todo la data que se envia con el dispatch
        },
        setAlgo: ()=> {}
    }
})
// console.log(userSlice)


export const {setUserList} = userSlice.actions;
export default userSlice.reducer;

export const fetchAllUsers= () => (dispatch) => {
    axios.get('https://reqres.in/api/users?per_page=12')
        .then(response => { dispatch(setUserList(response.data.data)) }) // con el dispatch enviamos la action
        .catch(error => console.log(error));
}
