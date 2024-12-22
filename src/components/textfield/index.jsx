import React, { useEffect, useRef } from 'react'

const namespace = 'textfield'

const Textfield = ({label, value, onChange, type="text", className= '', max, min, suffix}) => {

  const inputRef = useRef(null);
  const suffixRef = useRef(null);

  useEffect(() => {
    if (suffix && inputRef.current && suffixRef.current) {
      const suffixWidth = suffixRef.current.offsetWidth;
      inputRef.current.style.paddingLeft = `${suffixWidth + 20}px`;
    }
  }, [suffix]);
  
  return (
    <div className={`${namespace} ${className}`}>
      <p className={`${namespace}__label`}>{label}</p>
      <input ref={inputRef} type={type} max={max} min={min} className={`${namespace}__input`} value={value} onChange={onChange}/>
      {suffix && <span  ref={suffixRef} className={`${namespace}__suffix`}>{suffix}</span>}
    </div>
  )
}

export default Textfield
