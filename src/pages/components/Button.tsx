function Button(props:any) {
    return (
      <button
        type={props.type || "button"}
        className={props.className}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
  
  export default Button;
  