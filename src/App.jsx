import { useState } from 'react'
import { Provider } from 'react-redux';
import Nabvar from './components/Nabvar'
import UserList from './components/UserList';
import store from "./redux/store"

function App() {
  const [count, setCount] = useState(0)

  return (
      <Provider store={store}>
        <Nabvar/>
        <UserList />
      </Provider>
  )
}

export default App
