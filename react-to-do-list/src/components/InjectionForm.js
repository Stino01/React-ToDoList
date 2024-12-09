import React from "react";

function InjectionForm(props) {
    return (
        <form className="p-2" onSubmit={ props.handleSubmit }>
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Cosa vuoi fare?" 
                    onChange={ props.handleChange }
                    value={ props.data.text }>
                </input>
                <button className="btn btn-primary" type="submit"><i className="fa-solid fa-plus"></i></button>
            </div>
        </form>
    )
}

export default InjectionForm