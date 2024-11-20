export default function Home() {
  return (
    <main className="transition-colors duration-300">
      <div className="flex flex-col content-center items-center justify-center w-full h-full">
        <div className="main-top-content">
          <h1 className="text-center content-center w-[415px] h-52 text-5xl font-bold inline-block mr-auto mb-5 ml-auto mt-5 p-5 border-solid border-8 dark:border-white dark:text-white border-black text-black tracking-wider drop-shadow-sm">
            MAGNETIC
          </h1>
        </div>
        <h2 className="pb-16 pt-5 font-robotoCondensed text-3xl leading-9 font-normal">
          Ads that work.
        </h2>
        <div className="flex gap-8 items-center mt-3">
          <div className="h-[1px] w-44 bg-slate-500 rounded-xl"></div>
          <h1 className="text-2xl tracking-wide uppercase font-extralight">
            Join Our Beta List
          </h1>
          <div className="h-[1px] w-44 bg-slate-500 rounded-xl"></div>
        </div>
        <input
          className="h-14 my-5 mx-5 py-2 px-3 ring-0 outline-none text-gray-800 text-base text-center w-[415px] leading-5 dark:bg-white bg-black dark:border-white border-black border-solid border-2"
          name="email"
          placeholder="YOUR EMAIL ADDRESS"
          required
          type="email"
        />
        <div className="w-[415px] h-14 border-solid border-4 border-black text-2xl hover:bg-black hover:text-white  font-bold text-center uppercase py-3 px-4 text-black cursor-pointer ease-in-out duration-100 dark:text-white dark:hover:text-black dark:border-white dark:hover:bg-white">
          SUBMIT
        </div>
      </div>
    </main>
  );
}
