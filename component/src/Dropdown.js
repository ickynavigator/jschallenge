import PropTypes from "prop-types";
import { useState } from "react";
import "./styles/Dropdown.module.css";
const Dropdown = ({
  children,
  title,
  opened,
  showAddButton,
  onTitleClick,
  onAddButtonClick,
  plugin,
}) => {
  const [isOpen, setIsOpen] = useState(opened);

  return (
    <div className={`.container ${!isOpen ? ` .isClosed` : ""}`}>
      <div className={"styles header"}>
        <button
          className={`styles dropDownButton ${children ? "" : `hidden`}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="/shapekeyboardarrowdown2.svg" alt="Dropdown button" />
        </button>
        <span onClick={onTitleClick}>{title}</span>
        <img
          className={`addButton ${showAddButton ? "" : `hidden`}`}
          onClick={onAddButtonClick}
          src="/addicon.svg"
          alt="Add button"
          role="button"
        />
      </div>
      <ul className={"content"}>
        {children &&
          children.map((child, index) => {
            return (
              <li key={index} className={styles.item}>
                {plugin ? `${child.title}` : child}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

Dropdown.defaultProps = {
  opened: true,
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onTitleClick: PropTypes.func,
  showAddButton: PropTypes.bool,
  plugin: PropTypes.bool,
};

export default Dropdown;
