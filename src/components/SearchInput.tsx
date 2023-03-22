import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchInput: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const usernameRegex = new RegExp(/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);

  const handleError = (_error: string) => {
    setError(_error);
    setQuery('');
    navigate('/');
    setTimeout(() => setError(''), 2000);
  }

  const searchForUser = (event: FormEvent) => {
    event.preventDefault();
    if (query.trim() === "") return handleError("Please fill the form !");
    if(query.trim().length < 3)return handleError("Username is too short !");
    if(query.trim().length > 20)return handleError("Username is too long !");
    if (!usernameRegex.test(query)) return handleError("Enter a valid username !");
    // encode query
    const encodedQuery = encodeURI(query);
    navigate(`/search?user=${encodedQuery}`);
  };
  return (
    <>
      <form
        className="w-full md:w-2/3 lg:w-2/4 flex flex-row justify-center"
        onSubmit={searchForUser}
      >
        <input
          className="input-spotify"
          value={query}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
          placeholder="Search for a person.."
        />
      </form>
      {error ? <small className="tracking-wide text-lg text-red-600">
        {error}
      </small> : null}
    </>
  )
}
