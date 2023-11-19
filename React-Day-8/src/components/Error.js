
import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.log(error);

    return(
        <div className="flex h-screen items-center justify-center">
            <div className="text-center">
                <p className="text-3xl font-bold text-red-500">OOPS...</p>
                <p className="text-xl">Something went wrong</p>
                <p className="text-lg">{error.status}:{error.statusText}</p>
            </div>
        </div>
    )
    
}

export default Error;