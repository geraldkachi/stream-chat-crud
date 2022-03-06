import React from 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import StreamChatApp from './components/StreamChatApp';
import MainLayout from './ecomemerce-admin/Layout/MainLayout';
import Blank from './ecomemerce-admin/pages/Blank';
import Dashboard from './ecomemerce-admin/pages/Dashboard';
// import CrudApp from './CrudApp/CrudApp';
import ErrorPage from './ErrorPage';

const App = () => (
    <Routes>
      <Route path="/" element={<StreamChatApp />} />
      {/* <Route path="/team" element={<CrudApp />} /> */}
      <Route path="*" element={<ErrorPage />} />


    <Route path="/dash" element={<MainLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="orders" element={<Blank />} />
      <Route path="productsadmin" element={<Blank />} />
      <Route path="customers" element={<Blank />} />
      <Route path="settings" element={<Blank />} />
      <Route path="stats" element={<Blank />} />
    </Route>
    </Routes>
  )


export default App;



  // const [state, setState] = useState<number>(0)
  // const stateSelect = useSelector(state => state.account)
  // const stateSelect = useSelector(state => state)
  // const dispatch = useDispatch()

  // const Ac = bindActionCreators(actionCreators, dispatch)

  // console.log(stateSelect, "stateSelect")

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.tsx</code> and save to reload.
//       </p>
//       <div style={{display: 'flex', width:"10%", justifyContent:'space-evenly'}}>
//         <button onClick={() => setState(count => count - 1)}>-</button>

//         {state}

//         <button onClick={() => setState(count => count + 1)}>+</button>
//       </div>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//       God Help me!
//     </header>
//   </div>
// );