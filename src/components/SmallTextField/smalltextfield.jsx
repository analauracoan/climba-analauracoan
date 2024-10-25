import "./smalltextfield.css";

const SmallTextField = (props) => {
    return (
        <div className="textfield">
            <label>
                {`${props.label}`}
            </label>
            <input type={`${props.type}`} />
        </div>
    )
}

export default SmallTextField