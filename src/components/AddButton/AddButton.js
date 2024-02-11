import "./AddButton.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";

export function AddButton({ text }) {
  return (
    <div className="button__container">
      <button className="button__add">
        <img
          className="button__chevron"
          src={chevron}
          alte="chevron for add button"
        ></img>
        {text}
      </button>
    </div>
  );
}
