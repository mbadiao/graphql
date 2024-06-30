"use client";
import { RiLoginCircleFill } from "react-icons/ri";
import { useAppContext } from "./context/appContext";
export default function Home() {
  const { login, usernameOrEmail, setUsernameOrEmail, password, setPassword, errorLogin } = useAppContext();
  return (
    <>
      <div className="flex pt-32 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <RiLoginCircleFill className="mx-auto h-10 w-auto text-[#5E37FF]" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={login}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address or Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  value={usernameOrEmail}
                  onChange={(e) => setUsernameOrEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-primary-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {errorLogin && <div className="text-red-500 text-sm">{errorLogin}</div>}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#5E37FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary-blue"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
