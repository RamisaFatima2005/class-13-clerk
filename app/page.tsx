import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="justify-center items-center text-center bg-[url(/bgcover.png)] border border-2 shadow rounded-md min-h-screen">
      <div className="bg-black hover:bg-neutral-500 text-white rounded border border-black h-10 w-28 mt-80 m-auto">
        <div className="p-2">
      <SignInButton/>
      </div>
      </div>
    </div>
  );
}