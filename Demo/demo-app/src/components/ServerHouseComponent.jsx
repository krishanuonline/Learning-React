import React from "react";

function ServerHouseComponent(props) {
  return (
    <div className="bg-white flex flex-col items-stretch">
      <header className="text-white text-5xl font-extrabold max-w-[955px] bg-blue-600 w-full justify-center items-center px-16 py-6 max-md:max-w-full max-md:text-4xl max-md:px-5">
        Server House Privet Limited
      </header>
      <div className="self-center w-full max-w-[1347px] mt-9 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.57] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
            />
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-8">
              <button
                className="text-white text-4xl font-bold whitespace-nowrap border bg-blue-600 justify-center items-center px-16 py-7 border-solid border-blue-600 max-md:max-w-full max-md:px-5"
                aria-label="Button 1"
              >
                Button 1
              </button>
              <button
                className="text-white text-4xl font-bold whitespace-nowrap border bg-blue-600 justify-center items-center mt-20 px-16 py-7 border-solid border-blue-600 max-md:max-w-full max-md:mt-10 max-md:px-5"
                aria-label="Button 2"
              >
                Button 2
              </button>
              <button
                className="text-white text-4xl font-bold whitespace-nowrap border bg-blue-600 justify-center items-center mt-14 px-16 py-7 border-solid border-blue-600 max-md:max-w-full max-md:mt-10 max-md:px-5"
                aria-label="Button 3"
              >
                Button 3
              </button>
              <button
                className="text-white text-4xl font-bold whitespace-nowrap border bg-blue-600 justify-center items-center mt-14 px-16 py-7 border-solid border-blue-600 max-md:max-w-full max-md:mt-10 max-md:px-5"
                aria-label="Button 4"
              >
                Button 4
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black text-base self-center max-w-[1329px] mt-16 max-md:max-w-full max-md:mt-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. <br /> <br /> Why do we use it? <br /> It is a long
        established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like
        readable English. Many desktop publishing packages and web page editors
        now use Lorem Ipsum as their default model text, and a search for 'lorem
        ipsum' will uncover many web sites still in their infancy. Various
        versions have evolved over the years, sometimes by accident, sometimes
        on purpose (injected humour and the like).
      </div>
      <footer className="text-white text-center text-xs font-medium max-w-[614px] bg-cyan-700 w-full justify-center items-center mt-24 px-16 py-2 max-md:max-w-full max-md:mt-10 max-md:px-5">
        All Rights Reserved. © 2022 xxxxxxxxxxxxxxxx Design By : xxxxxx
      </footer>
    </div>
  );
}

export default ServerHouseComponent;
