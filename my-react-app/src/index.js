
import  React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddProduct from './components/AddProduct/addProduct';
import SignUpUser from './components/SignUpUSer/signupuser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {<AddProduct/>}
      {<SignUpUser/>}

  </React.StrictMode>
);


reportWebVitals();
