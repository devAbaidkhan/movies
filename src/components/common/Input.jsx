const Input = ({name,value,label,onChange,error}) => {
  return(
      <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <input
              value={value}
              name={name}
              onChange={onChange}
              type="text"
              className="form-control"
              id={name}
              placeholder={label}
            />
          {error && <div className="alert alert-danger">{error}</div>}
      </div>
  )
}

export default Input;