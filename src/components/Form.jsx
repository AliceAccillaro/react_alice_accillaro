function Form({ children }) {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (

        <div className="form-container">

            <h2>Form Utente</h2>

            <form onSubmit={handleSubmit}>
                {children}
            </form>

        </div>

    );

}


function Input({ type, placeholder }) {

    return (
        <input
            type={type}
            placeholder={placeholder}
        />
    );

}


function Button() {

    return (
        <button type="submit">
            Invia
        </button>
    );

}


Form.Input = Input;
Form.Button = Button;

export default Form;