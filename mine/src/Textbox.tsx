
function Textbox(props : any) {
    return (
        <div className="Textbox">
            <header className="Textbox-header">
                <p>
                    {props.label}
                    <input type={"text"} onChange={event => props.change(event.target.value)}/>
                </p>

            </header>
        </div>
    );
}

export default Textbox