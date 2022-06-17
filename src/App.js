import { createContext, useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./components/navbar.jsx";
import FindMovie from "./components/movies/FindMovie.jsx";
import OrderBuy from "./components/order/order-buy.jsx";
import CustomerLogin from "./components/customer/customer-login.js";
import CustomerRegister from "./components/customer/customer-register.jsx";
import CustomerDelete from "./components/customer/customer-delete.jsx";
import CreditCardAdd from "./components/creditcard/creditcard-add.jsx";
import CreditCardUpdate from "./components/creditcard/creditcard-update.jsx";
import CreditCardDelete from "./components/creditcard/creditcard-delete.jsx";
import CreditCardBuy from "./components/creditcard/creditcard-buy.jsx";
import CreditCardRent from "./components/creditcard/creditcard-rent.jsx";
import CCFindAll from "./components/creditcard/creditcard-viewall.jsx";
import CustomerDashboard from "./components/customer/customer-dashboard.jsx";
import FavoriteAdd from "./components/favorites/favorite-add.jsx";
import FavoriteFindAll from "./components/favorites/favorite-viewall.jsx";
import FavoriteDelete from "./components/favorites/favorite-delete.jsx";
import OrderRent from "./components/order/order-rent.jsx";
import OrderFindAll from "./components/order/order-viewall.jsx";
import Logout from "./components/customer/customer-logout.jsx";


export const userContext = createContext();
export const movieContext = createContext();

function App() {
  const [user, setUser] = useState({ email: "Guest" });
  const [movie, setMovie]= useState({imdbID: "null"})
  return (
      <>
      <BrowserRouter>
      <userContext.Provider value={[user, setUser]}>
      <movieContext.Provider value={[movie, setMovie]}>
          <NavBar />
          <Routes>
                

              <Route path= "/" element={<FindMovie/>}/>
              <Route path="buyMovie" element={<OrderBuy/>}/>
              <Route path="login" element={<CustomerLogin />} />
              <Route path="register" element={<CustomerRegister />} />
              <Route path="delete" element={<CustomerDelete></CustomerDelete>} />
              <Route path="dashboard" element={<CustomerDashboard></CustomerDashboard>} />
              <Route path="ccadd" element={<CreditCardAdd></CreditCardAdd>} />
              <Route path="ccupd" element={<CreditCardUpdate></CreditCardUpdate>} />
              <Route path="ccdel" element={<CreditCardDelete></CreditCardDelete>} />
              <Route path="ccbuy" element={<CreditCardBuy />} />
              <Route path="ccrent" element={<CreditCardRent />} />
              <Route path="ccall" element={<CCFindAll />} />
              <Route path="orderrent" element={<OrderRent />} />
              <Route path="orderall" element={<OrderFindAll />} />
              <Route path="favdel" element={<FavoriteDelete />} />
              <Route path="favadd" element={<FavoriteAdd />} />
              <Route path="favall" element={<FavoriteFindAll />} />
              <Route path="favdel" element={<FavoriteDelete />} />
              <Route path="logout" element={<Logout />} />
                
          </Routes>
          </movieContext.Provider>
          </userContext.Provider>
      </BrowserRouter>
      
  </>

  );
}

export default App;
