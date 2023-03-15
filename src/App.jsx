

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import UserRoutes from 'UserRoats';



export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  );
};
