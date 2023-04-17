import './App.css';
import 'antd/dist/reset.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import UpdateForm from './Pages/UpdateForm';
import styled from 'styled-components';

const Header = styled.div`
  width: 100vw;
  height: 80px;
  background-color: blue;
`

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/update/:id" component={UpdateForm} />
      </div>
    </BrowserRouter>
     <Header />
     </>
  );
}

export default App;
