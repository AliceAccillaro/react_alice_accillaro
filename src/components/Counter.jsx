import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (

        <div className="card bg-base-100 shadow-2xl w-full max-w-2xl mx-auto mb-20">

            <div className="card-body items-center text-center p-12">

                <h2 className="text-5xl font-bold text-black mb-6">
                    Contatore
                </h2>

                <p className="text-9xl font-bold text-black mb-10">
                    {count}
                </p>

                <div className="flex gap-6">

                    <button
                        className="btn btn-error btn-lg"
                        onClick={() =>
                            setCount((prev) => prev - 1)
                        }
                    >
                        -
                    </button>

                    <button
                        className="btn btn-success btn-lg"
                        onClick={() =>
                            setCount((prev) => prev + 1)
                        }
                    >
                        +
                    </button>

                </div>

            </div>

        </div>

    );

}

export default Counter;