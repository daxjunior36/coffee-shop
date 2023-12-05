import { createStackNavigator } from '@react-navigation/stack'; 
import Home from '../views/home/Home';
import App from '../../App';
import Detail from '../views/Detail/Detail';
import Order from  '../views/Order/Order';
import { createAppContainer } from "react-navigation";

const Routes = createStackNavigator({
  Initial: {
    screen: App
  },

  Home: {
    screen: Home
  },
  Detail: {
    screen: Detail
  },

  Order: {
    screen: Order
  },

}) 


export default createAppContainer(Routes); 