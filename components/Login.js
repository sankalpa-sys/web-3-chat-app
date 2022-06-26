import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate,user } = useMoralis();

  return (
    <div className="relative bg-black">
      <h1>I am the login Page</h1>

      <div className="flex flex-col space-y-4 absolute h-4/6 justify-center w-full items-center z-50">
        <Image
          className="rounded-full object-cover"
          src="https://cdn.pixabay.com/photo/2015/11/16/16/41/web-1045994_1280.jpg"
          height="200"
          width="200"
        />

        <button
          onClick={authenticate}
          className="bg-yellow-500 p-5 font-bold rounded-lg animate-pulse  "
        >
          Login to the METAVERSE
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
