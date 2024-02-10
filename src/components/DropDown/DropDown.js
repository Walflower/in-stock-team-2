import { useState } from "react";
import "./DropDown.scss";

export default function Dropdown(props) {
  const { name, options, onSelect, error, labelText, placeholder } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption({ [name]: option });
    onSelect({ name, option });
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <label className="dropdown__label">{labelText}</label>
      <div className="dropdown__input" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? (
          <span className="dropdown__selected">{selectedOption[name]}</span>
        ) : (
          <span className="dropdown__placeholder">{placeholder}</span>
        )}
      </div>
      {isOpen && (
        <ul className="dropdown__options">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown__option"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      <div className="dropdown__error-container">
        {error && <p className="dropdown__error-message">{error}</p>}
      </div>
    </div>
  );
}
