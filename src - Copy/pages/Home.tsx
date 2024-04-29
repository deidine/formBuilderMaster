import "../App.css";
import { FormProps } from "../types/form";
import NavBar from "../components/NavBar";
import FormBuilder from "./FormBuilder";

export default function Home({ data }: FormProps) {
  return (
    <main className="w-full h-full overflow-auto lg:fixed">
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <div className="lg:flex">
        <div className="h-full flex-1 pt-20 pb-12 transition-colors relative xl:px-8 xl:pt-10">
          <div className="max-w-2xl mx-auto sticky top-0 flex flex-wrap justify-end gap-3 px-4 sm:px-0">
            <div className="flex-1">
              <div className="flex items-center gap-x-2 text-xs font-medium text-zinc-700">
                <div className="flex items-center gap-x-1">
                  <a href="/dashboard" className="hover:underline">
                    Home
                  </a>{" "}
                  <p className="max-w-[200px] truncate">Untitled</p>
                </div>
                <a
                  target="_blank"
                  className="text-zinc-500 hover:text-indigo-600 duration-150"
                  href="https://Main.rapidHome.co/p/c95408"
                >
                  {" "}
                  ssss
                </a>
              </div>
              <TopBar />
            </div>
          </div>

          <FormBuilder data={data} />
        </div>

        <div className="flex-none fixed z-10 inset-x-0 top-16 pt-6 w-full xl:relative xl:max-w-[19rem] xl:top-0 xl:inset-x-[unset] xl:pt-0">
          side bar
        </div>
      </div>
    </main>
  );
}

function TopBar() {
  return (
    <div className="py-3 border-b max-w-2xl mx-auto mt-3 border shadow-sm rounded-xl">
      <div dir="ltr" data-orientation="horizontal" className="w-60 mx-auto">
        <div className="inline-flex gap-x-3 h-10 items-center justify-center p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 w-full rounded-lg text-sm bg-zinc-50">
          <button className="btn2 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 rounded-lg text-zinc-800 w-14">
            Save
          </button>
          <button className=" btn2  hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-3 rounded-lg border bg-zinc-100 text-zinc-800 hover:text-white">
            Publish
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50 w-full rounded-lg gap-x-2 data-[state=active]:border data-[state=active]:text-zinc-700"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}
