function IconSwitch(props){
    const icon = props.icon;
    const onSwitch = props.onSwitch;
   // console.log("projects: ", projects);
   
  //  const category = props.category; 
  
    return (
      <div className="switcher text-end">
        <span className="material-icons"
          onClick={() => onSwitch()} 
        >
          {icon}
        </span>
      </div>
    );
    }
      
  export default IconSwitch;