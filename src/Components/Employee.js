import EditEmployee from "./EditEmployee";

function Employee(props) {
     return (
      <div className="m-2 py-8 px-8 max-w-sm space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
      <img className="object-cover rounded-full h-100px w-100px block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.img} alt="man"/>
      <div className="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            {props.name}
          </p>
          <p className="text-slate-500 font-medium">
           {props.role}
          </p>
        </div>
          <EditEmployee/> 
      </div>
    </div>
     )
}


export default Employee;