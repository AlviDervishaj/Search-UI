import { Link } from "react-router-dom";
import ErrorCode from "./assets/error-computer-xl.png";
const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center content-center justify-center gap-20">
      <img src={ErrorCode} alt="Error code" className="w-32 md:w-52" />
      <div>
        <h1>Oops !</h1>
        <p>Something unexpected happened !</p>
      </div>
      <Link to={'/'} className="w-fit outline-none h-fit bg-sky-500 tracking-wide cursor-pointer py-2 px-6 rounded-md hover:bg-sky-600 transition-colors duration-300">
        Return Home
      </Link>
    </section>
  );

}

export default ErrorPage
