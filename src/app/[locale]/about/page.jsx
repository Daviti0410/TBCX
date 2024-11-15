export default function About() {
  return (
    <main className="h-4/5 overflow-hidden">
      <div className="flex flex-col content-center items-center">
        <div className="about-first-container">
          <h1 className="text-center w-[415px] text-6xl font-bold inline-block mx-auto my-5 p-5 border-solid border-white border-8 dark:text-white text-black tracking-wider shadow">
            ABOUT
          </h1>
        </div>
        <div className="flex gap-8 items-center mt-3">
          <div className="h-[1px] w-[150px] bg-[#ffffff5c] rounded-lg"></div>
          <p className="text-[20px] tracking-[4px] uppercase font-extralight text-justify w-[415px]">
            Quickly incentivize impactful action items before tactical
            collaboration and idea-sharing. Monotonically engage market-driven
            intellectual capital through wireless opportunities. Progressively
            network performance based services for functionalized testing
          </p>
          <div className="h-[1px] w-[150px] bg-[#ffffff5c] rounded-lg"></div>
        </div>
      </div>
    </main>
  );
}
