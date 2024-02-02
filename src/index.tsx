import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElem = document.getElementById('root') as HTMLElement
if(rootElem){
  const root = ReactDOM.createRoot(rootElem);
  root.render(
  <Provider store={store} >
     <Router>
        <App />
     </Router>
  </Provider>
  );
}