import { useState } from "react";
import "./DropDown.scss";

export default function DropDown(props) {
  const { name, options, onSelect, error, placeholder } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(name, option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__input" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? (
          <span className="dropdown__selected">{selectedOption[options]}</span>
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
