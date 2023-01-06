// este es el global state al cual le llamamos store

import { configureStore } from "@reduxjs/toolkit";
// reducers
import users from "./slices/users";

export default configureStore({
    reducer:{                   //aca se crean los reducers/slices, pueden ser varios.
        users                   // un fragmento del estado global
    }
})