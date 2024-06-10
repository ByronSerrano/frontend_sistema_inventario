const InputForm = (props) => {
    return (
        <label>
          {props.label}
          <input type={props.type} name={props.name} value={props.value} onChange={props.handleChange} required />
        </label>
    ) 
}

export default InputForm;
