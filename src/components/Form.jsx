function Form({ children }) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="card bg-base-100 shadow-xl w-full max-w-xl mx-auto mb-10">
            <div className="card-body">
                <h2 className="card-title text-2xl">Form Utente</h2>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    {children}
                </form>
            </div>
        </div>
    );
}

function Input({ type, placeholder }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="input input-bordered w-full"
        />
    );
}

function Button() {
    return (
        <button type="submit" className="btn btn-primary">
            Invia
        </button>
    );
}

Form.Input = Input;
Form.Button = Button;

export default Form;