import React from "react";
import {Route, Routes} from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage'
import { Layout } from './pages/Layout/Layout'
const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
