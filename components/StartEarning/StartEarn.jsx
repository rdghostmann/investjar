export default function(){
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2 lg:gap-5">
          <div>
            <h2 className="mb-6 max-w-2xl text-3xl font-bold md:mb-10 md:text-5xl lg:mb-12">
              Lightning Fast Webflow Dev Made Easy
            </h2>
            {/* List */}
            <ul className="grid max-w-lg grid-cols-2 gap-4">
              <li className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                  alt=""
                  className="mr-2 h-8 w-8"
                />
                <p className="text-sm sm:text-base">300+ UI Blocks</p>
              </li>
              <li className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                  alt=""
                  className="mr-2 h-8 w-8"
                />
                <p className="text-sm sm:text-base">Fully responsive</p>
              </li>
              <li className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                  alt=""
                  className="mr-2 h-8 w-8"
                />
                <p className="text-sm sm:text-base">New UI Blocks</p>
              </li>
              <li className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                  alt=""
                  className="mr-2 h-8 w-8"
                />
                <p className="text-sm sm:text-base">Just copy & paste</p>
              </li>
            </ul>
            {/* Divider */}
            <div className="mb-10 mt-10 w-full max-w-lg border-b border-gray-300 "></div>
            <a
              href="#"
              className="inline-block bg-black px-6 py-3 font-semibold text-white"
            >
              Sign up for free
            </a>
          </div>
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="mx-auto inline-block h-full w-full max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}