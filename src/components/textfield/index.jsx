import React from 'react'

const namespace = 'textfield'

const Textfield = ({label, value, onChange, type="text", className= '', max, min, suffix}) => {
  return (
    <div className={`${namespace} ${className}`}>
      <p className={`${namespace}__label`}>{label}</p>
      <input suffix={suffix} type={type} max={max} min={min} className={`${namespace}__input`} value={value} onChange={onChange}/>
      <span className={`${namespace}__suffix`}>{suffix}</span>
    </div>
  )
}

export default Textfield
