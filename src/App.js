import './index.css';
import Employee from './Components/Employee';
import {useState} from 'react'
import {v4 as uuidv4} from "uuid"
function App() {
  const [role,setRole] = useState('dev')
  const showEmployees = true;
  const [employees,setEmployeees] = useState([
    {
      name: "Caleb", 
      role : 'Developer',
      img :  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {name: "Sal", 
      role : 'Mananger',
      img :  "https://images.pexels.com/photos/18906153/pexels-photo-18906153/free-photo-of-k-a-u-s-b-y-d-m-p-h-o-t-o-s-t-u-d-i-o.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {name: "Jake", 
      role : 'Deirector of eng',
      img :  "https://images.pexels.com/photos/16597259/pexels-photo-16597259/free-photo-of-close-up-shot-of-serious-man-looking-at-camera.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {name: "Caleb", 
      role : 'Developer',
      img :  "https://images.pexels.com/photos/18424979/pexels-photo-18424979/free-photo-of-brunette-with-eyes-closed-in-field.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {name: "Jake", 
      role : 'Semior Dev',
      img :  "https://images.pexels.com/photos/16771674/pexels-photo-16771674/free-photo-of-itay-verchik-smiles.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ])
  return (
    <div className="App">
      {showEmployees ? (
        <>
        <input type='text' 
        onChange={ (e) =>{
          console.log(e.target.value)
          setRole(e.target.value)
        }
          
        }/>
        <div className='flex flex-wrap justify-center'> 
          {employees.map((employee)=>{
           return( <Employee
           key = {uuidv4()}
             name = {employee.name} 
            img = {employee.img} 
            role = {employee.role}/>
           )
          })}
       </div>
        </>
       ) : (
        <p>You cannot see the employees</p>
       ) }
    </div>
  );
}

export default App;
