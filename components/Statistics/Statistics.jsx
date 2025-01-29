export default function Statistics() {
  return (
    <>
     <section className="text-gray-600 body-font">
       <div className="container px-5 py-24 mx-auto">
         <div className="flex flex-col text-center w-full mb-20">
           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Stats</h1>
           <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr. Franzen you probably haven't heard of them man bun deep jianbing selfies.</p>
         </div>
         <div className="flex flex-wrap -m-4 text-center">
           <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
             <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
               <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"> <path d="M8 17l4 4 4-4m-4-5v9"></path> <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path> </svg>
               <h2 className="title-font font-medium text-3xl text-gray-900">69.7K</h2>
               <p className="leading-relaxed">Total Deposited</p>
             </div>
           </div>
           <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
             <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
               <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"> <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path> </svg> <h2 className="title-font font-medium text-3xl text-gray-900">79.5K</h2> <p className="leading-relaxed">Total Members</p> </div> </div> <div className="p-4 md:w-1/4 sm:w-1/2 w-full"> <div className="border-2 border-gray-200 px-4 py-6 rounded-lg"> <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"> <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                 <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
               </svg>
                 <h2 className="title-font font-medium text-3xl text-gray-900">178</h2>
                 <p className="leading-relaxed">Countries Supported</p>
               </div>
           </div>
         </div>
       </div>
     </section>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-10 w-full">
        <div className="sm:w-[60%]">
          <p className="font-bold mb-4 text-lg">Our Stats</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="p-8 bg-white rounded-md  shadow-lg flex flex-col lg:items-start lg:border-b-0 items-center justify-center">
              <div className="flex justify-between w-full mb-8">
                <span className="text-gray-500 font-bold">Total Desposited</span>
              </div>
              <span className="text-2xl font-bold">71,897</span>
            </div>
            <div className="p-8 bg-white rounded-md  shadow-lg flex flex-col lg:items-start lg:border-b-0 items-center justify-center">
              <div className="flex justify-between w-full mb-8">
                <span className="text-gray-500 font-bold">Avg. Open Rate</span>
              </div>
              <span className="text-2xl font-bold">58.16%</span>
            </div>
            <div className="p-8 bg-white rounded-md  shadow-lg flex flex-col lg:items-start lg:border-b-0 items-center justify-center">
              <div className="flex justify-between w-full mb-8">
                <span className="text-gray-500 font-bold">Avg. Click Rate</span>
              </div>
              <span className="text-2xl font-bold">24.57%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
