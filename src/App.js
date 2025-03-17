import './index.css';
import Employee from './Components/Employee';
import {useState} from 'react'
function App() {
  const [role,setRole] = useState('dev')
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ? (
        <>
        <input type='text' 
        onChange={ (e) =>{
          console.log(e.target.value)
          setRole(e.target.value)
        }
          
        }/>
       <Employee name = 'Caleb' role = "Intern"/>
       <Employee name = 'Victor' role = {role}/>

       <Employee  name = "Abby"/>
       <Employee/>
       <Employee/>
        </>
       ) : (
        <p>You cannot see the employees</p>
       ) }
    </div>
  );
}

export default App;
