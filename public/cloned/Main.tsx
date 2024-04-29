import "tailwindcss/tailwind.css";

function Main() {
  return (
    <>
      <main className="w-full h-full overflow-auto lg:fixed">
        <div className="sticky top-0 z-10">
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
                    src="https://lh3.googleusercontent.com/a/ACg8ocIcWXswWwbrxF67jPgcqRLmu5TOF-d3oNQs9qfPqKj4t6TxrAM=s96-c"
                  />
                </button>
              </div>
            </nav>
          </header>
        </div>
        <div className="lg:flex">
          <div className="builder-mode">
            <div className="absolute w-full h-full -z-10 inset-0 transition-colors dark:bg-zinc-950"></div>
          </div>
          <div className="builder-mode h-full flex-1 pt-20 pb-12 transition-colors relative xl:px-8 xl:pt-10">
            <div className="max-w-2xl mx-auto sticky top-0 flex flex-wrap justify-end gap-3 px-4 sm:px-0">
              <div className="flex-1">
                <div className="flex items-center gap-x-2 text-xs font-medium text-zinc-700">
                  <div className="flex items-center gap-x-1">
                    <a href="/dashboard" className="hover:underline">
                      Forms
                    </a>{" "}
                    <p className="max-w-[200px] truncate">Untitled</p>
                  </div>
                  <a
                    target="_blank"
                    className="text-zinc-500 hover:text-indigo-600 duration-150"
                    href="https://Main.rapidforms.co/p/c95408"
                  >
                    {" "}
                  </a>
                </div>
              </div>
              <div className="flex justify-end gap-x-3">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 rounded-lg text-zinc-500">
                  {" "}
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 rounded-lg text-zinc-800 w-14">
                  Save
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-3 rounded-lg border bg-zinc-100 text-zinc-800 hover:text-white">
                  Unpublish
                </button>
              </div>
            </div>
            <div>
              <div className="max-w-2xl mx-auto mt-3 border shadow rounded-xl">
                <div className="py-3 border-b">
                  <div
                    dir="ltr"
                    data-orientation="horizontal"
                    className="w-60 mx-auto"
                  >
                    <div
                      role="tablist"
                      aria-orientation="horizontal"
                      className="inline-flex h-10 items-center justify-center p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 w-full rounded-lg text-sm bg-zinc-50"
                      data-orientation="horizontal"
                    >
                      <button
                        type="button"
                        role="tab"
                        aria-selected="true"
                        aria-controls="radix-:r0:-content-Editor"
                        data-state="active"
                        id="radix-:r0:-trigger-Editor"
                        className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50 w-full rounded-lg gap-x-2 data-[state=active]:border data-[state=active]:text-zinc-700"
                        data-orientation="horizontal"
                        data-radix-collection-item=""
                      >
                        Editor
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected="false"
                        aria-controls="radix-:r0:-content-Preview"
                        data-state="inactive"
                        id="radix-:r0:-trigger-Preview"
                        className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50 w-full rounded-lg gap-x-2 data-[state=active]:border data-[state=active]:text-zinc-700"
                        data-orientation="horizontal"
                        data-radix-collection-item=""
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 p-8" id="form-playground">
                  <div className="space-y-2 relative group flex-1">
                    <button className="absolute -left-5 flex-none mt-3 cursor-grab duration-150 text-zinc-400 hidden group-hover:block hover:text-zinc-600">
                      {" "}
                    </button>
                    <div className="space-y-2 relative group flex-1">
                      <div className="absolute w-6 inline-block text-right h-fit top-0 bottom-0 translate-y-[50%] my-auto -right-6 opacity-0 group-hover:opacity-100">
                        <button
                          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-md w-3 px-2 h-6 border-none hover:border"
                          type="button"
                          id="radix-:r3:"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-state="closed"
                        ></button>
                      </div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-700 dark:text-zinc-400">
                        <input
                          className="w-full outline-none bg-transparent"
                          type="text"
                          value="Emailhjbhjhj"
                        />
                      </label>
                      <input
                        className="flex h-10 w-full text-sm ring-offset-white file:border-0
      file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none 
      focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50
       dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:text-zinc-300
        bg-white focus-visible:bg-white border border-zinc-200 duration-100
         placeholder:text-zinc-400 text-zinc-600 hover:border-zinc-200
          focus:border-zinc-200 hover:bg-white ring-2 ring-transparent
           focus:bg-white focus-visible:ring-indigo-400 dark:bg-zinc-800 dark:border
            dark:border-zinc-800 dark:focus-visible:ring-indigo-400 focus-visible:ring-offset-0
             focus-visible:duration-0 shadow-sm rounded-lg py-2 px-3 dark:hover:bg-zinc-800/80"
                   
                        type="email"
                        value="Enter your emaildeds"
                      />
                    </div>
                  </div>
                  <div className="relative group flex-1">
                    <button className="absolute -left-5 flex-none mt-3 cursor-grab duration-150 text-zinc-400 hidden group-hover:block hover:text-zinc-600">
                      {" "}
                    </button>
                    <div className="relative group flex-1">
                      <div className="absolute w-6 inline-block text-right h-fit top-0 bottom-0 translate-y-[50%] my-auto -right-6 opacity-0 group-hover:opacity-100">
                        <div>
                          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-md px-1 h-7 text-zinc-500 hover:text-white hover:bg-red-500 duration-200">
                            {" "}
                          </button>
                        </div>
                      </div>
                      <p
                        className="text-zinc-600 dark:text-zinc-300 text-center"
                        data-state="closed"
                      >
                        <div>
                          <div translate="no" className="tiptap ProseMirror">
                            <p>
                              The only way to do great work is to love what you
                              do.
                            </p>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 relative group flex-1">
                    <button className="absolute -left-5 flex-none mt-3 cursor-grab duration-150 text-zinc-400 hidden group-hover:block hover:text-zinc-600">
                      {" "}
                    </button>
                    <div className="space-y-2 relative group flex-1">
                      <div className="absolute w-6 inline-block text-right h-fit top-0 bottom-0 translate-y-[50%] my-auto -right-6 opacity-0 group-hover:opacity-100">
                        <button
                          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-md w-3 px-2 h-6 border-none hover:border"
                          type="button"
                          id="radix-:r5:"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          {" "}
                        </button>
                      </div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-700 dark:text-zinc-400">
                        <input
                          className="w-full outline-none bg-transparent"
                          type="text"
                          value="Email"
                        />
                      </label>
                      <input
                        className="flex h-10 w-full text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:text-zinc-300 bg-white focus-visible:bg-white border border-zinc-200 duration-100 placeholder:text-zinc-400 text-zinc-600 hover:border-zinc-200 focus:border-zinc-200 hover:bg-white ring-2 ring-transparent focus:bg-white focus-visible:ring-indigo-400 dark:bg-zinc-800 dark:border dark:border-zinc-800 dark:focus-visible:ring-indigo-400 focus-visible:ring-offset-0 focus-visible:duration-0 shadow-sm rounded-lg py-2 px-3 dark:hover:bg-zinc-800/80"
             
                        type="email"
                        value=""
                      />
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 hover:bg-zinc-900/90 h-10 w-full bg-zinc-800 text-zinc-50 active:scale-[0.99] duration-200 focus-visible:bg-none dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-700 shadow-sm rounded-lg py-2 px-3">
                    <input
                      className="outline-none bg-transparent w-full text-center"
                      value="Submit"
                    />
                  </button>
                </div>
              </div>
              <div className="mt-3 max-w-2xl mx-auto">
                <button
                  className="items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-10 px-4 py-2 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 w-full flex justify-center gap-3 text-zinc-700 dark:text-zinc-300 rounded-lg"
                  type="button"
                  id="radix-:R19uuul7qja:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  {" "}
                  Insert a form block
                </button>
              </div>
            </div>
          </div>
          <div className="flex-none fixed z-10 inset-x-0 top-16 pt-6 w-full xl:relative xl:max-w-[19rem] xl:top-0 xl:inset-x-[unset] xl:pt-0"></div>
        </div>
 
      </main>
    </>
  );
}

export default Main;
