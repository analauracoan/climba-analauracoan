import "./button.css";

const Button = (props) => {
    return (
        <div className="div-button">
            <button>
                {`${props.text}`}
            </button>
        </div>
    )
}

export default Button;