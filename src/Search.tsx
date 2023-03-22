import { FC, useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { loadData, Props, searchForUser } from "./data";
import { User } from "./components";

const Search: FC = () => {
  const [data, setData] = useState<Array<Props> | []>([]);
  const [searchParams] = useSearchParams();
  const user: string | null = searchParams.get('user');
  if (!user) return <Navigate to={'/'} />
  useEffect(() => {
    loadData(setData);
  }, []);

  const result: Array<Props> = searchForUser(user, data);
  return (
    <div className="w-full">
      <h1 className="flex flex-row items-center content-center justify-center gap-2 text-md md:text-lg lg:text-xl">
        Searching for :
        <p className="text-sky-500 font-bold tracking-wide ">{user}</p>
      </h1>
      <section className="overflow-x-hidden rounded-lg overflow-y-auto w-full max-h-[40rem] snap-y shadow-gray-800 p-2 shadow-lg">
        {result && result.map((_user: Props) => <User user={_user} key={_user.id} />)}
      </section>
    </div>
  )
}

export default Search;
