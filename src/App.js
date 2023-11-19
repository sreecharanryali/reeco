import "./App.css";
import Nav from "./Nav";
import OrderNavigation from "./OrderNavigation";
import OrderInfo from "./OrderInfo";
import DataTable from "./DataTable";
import {orderTableData} from './MockData'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <OrderNavigation />
      </header>
      <OrderInfo />
      <DataTable data={orderTableData} />
    </div>
  );
}

export default App;
