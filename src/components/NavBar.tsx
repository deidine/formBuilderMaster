import React from "react";

export default function NavBar() {
  return (
    <header className="border-b top-0 bg-white xl:static">
      <nav className="pt-1.5 flex items-center justify-between flex-wrap text-sm sm:flex-nowrap px-4 xl:px-8">
        <div className="">
          <a href="/dashboard"></a>
        </div>
        <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto sm:flex-1 lg:block">
          <ul className="flex items-center overflow-x-auto sm:ml-12">
            <li className="py-3 border-b-[1.5px] border-transparent">
              <a
                className="block py-1.5 px-3 rounded-lg text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 duration-150"
                href="/dashboard"
              >
                Forms
              </a>
            </li>
            <li className="py-3 border-b-[1.5px] border-transparent">
              <a
                className="block py-1.5 px-3 rounded-lg text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 duration-150"
                href="/dashboard/responses"
              >
                Responses{" "}
              </a>
            </li>
            <li className="ml-1">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 rounded-md py-1.5 px-3 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 duration-150 font-normal">
                Feedback
              </button>
            </li>
          </ul>
        </div>
        <div className="order-2 flex-shrink-0 sm:order-3">
          <button
            type="button"
            id="radix-:R6nqja:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            className="outline-none"
          >
            <span className="flex shrink-0 overflow-hidden rounded-full w-10 h-10 relative"></span>
            <img
              className="aspect-square h-full w-full"
              alt="@sidiDev"
              src=" "
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
