import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";

export default async function ProfileServer() {
  const { user } = await getSession();

  return (
    user && (
      <div className="bg-blac flex flex-row justify-center items-center text-6xl font-bold gap-8 max-w-[400px] mt-36 m-auto h-auto p-10 rounded-xl border-[1px] border-solid border-white">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Image height={200} width={200} src={user.picture} alt={user.name} />
      </div>
    )
  );
}
