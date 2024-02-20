import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.scss';
import "react-multilevel-sidebar/src/Sidebar.css";
import { Header } from './components/Header'; 
import {SideBar} from './components/SideBar';



function Layout() {
  return (
    <div className="App">
      <Header/>
      <SideBar/>
    </div>
  );
  
} 

export default Layout;
