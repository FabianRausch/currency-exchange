import React, { useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const namespace = "select";

const Select = ({ value, options, onChange, className = "", label, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicking, setIsClickingInside] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.id === value)
  );
  const handleTrigger = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option.id, name);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedOption(options.find((option) => option.id === value));
  }, [value, options]);


const handleBlur = () => {
  if (!isClicking) {
    setIsOpen(false);
  }
  setIsClickingInside(false);
};

const handlePointerDown = () => {
  setIsClickingInside(true);
};

  return (
    <div className={`${namespace} ${className}`}>
      <p className={`${namespace}__label`}>{label}</p>
      <div
        tabIndex={0}
        onBlur={handleBlur}
        onClick={handleTrigger} className={`${namespace}__trigger ${isOpen ? `${namespace}__open` : ''}`}>
        <span className={`${namespace}__trigger-label`} >{selectedOption?.name}</span>
        <IoChevronDown className={`${namespace}__chevron`}/>
      </div>
      {isOpen && (
        <ul className={`${namespace}__options`} onPointerDown={handlePointerDown} >
          {options.map((option) => (
            <li
              key={option.id}
              className={`${namespace}__option ${
                selectedOption?.id === option.id ? `${namespace}__selected` : ""
              }`}
              onClick={() => handleOptionClick(option)}
             
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
