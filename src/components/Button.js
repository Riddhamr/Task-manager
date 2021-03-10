import PropTypes from "prop-types";

function Button({ color, text, onClick }) {
    return (
        <div
            style={{ backgroundColor: color }}
            className="btn"
            onClick={onClick}
        >
            {text}
        </div>
    );
}
Button.defaultProps = {
    color: "steelblue",
};

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
