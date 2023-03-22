import { FC } from "react";
import { Props } from "../data";

type UserProps = {
  user: Props,
}
export const User: FC<UserProps> = ({ user }) => {
  return (
    <div className="w-full px-5 py-10 bg-sky-900 my-8 snap-start scroll-my-6 rounded-md">
      <h1 className="font-bold tracking-wide text-2xl p-2">@{user.username}</h1>
    </div>
  )
}
