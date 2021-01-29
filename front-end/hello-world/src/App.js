
//import AddUser from './AddUser';
import AddUserHooks from './AddUserHooks';
import './App.css';
import UserListe from './UserListe';

function App() {
  return (
    <div className="App">
     <UserListe />
       {/* <AddUser /> */}
       <AddUserHooks />
    </div>
  );
}

export default App;
