import Contact from './Сomponents/Contact/Contact';
import { Link } from "react-router-dom";
import Navigation from './Сomponents/Navigation/Navigation';
import Category_List from './Сomponents/Categories/Category_list/Category_List';
import image from './image.png';
import promotion from './promotion.png';
import Sale_List from './Сomponents/Sales/Sale_List/Sale_List';
import Title from './Сomponents/Title/Title';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <Navigation/>
      <div class="head-picture">
        <div class="picture">
            <img width="100%" height="600" src={image} alt="Discount"/>
        </div>
        <h1> Amazing Discounts on Garden Products! </h1>
      </div>
      <div class="head-button">
        <h2> <Link to="/sales"> Check out </Link>  </h2>
      </div>
      <div class="category-head"> 
      <Title name = 'Categories'></Title>
         <div class="all-category"> 
           <div class="block"> <Link to="/products"> All categories </Link> </div>
         </div>
      </div>
      <Category_List/>
        <div class="promotion">
          <img width="1300" height="400" src={promotion} alt="Promotion"/>
        </div>
      <div class="sale-head">
      <Title name = 'Sale'></Title>
        <div class="all-sale"> 
          <div class="block"> <Link to="/sales"> All sales </Link> </div>
        </div>
      </div>
      <Sale_List/>
      <Contact/>
    </div>
  );
}

export default App;
