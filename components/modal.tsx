export const Modal:React.FC<{title:string,　closeFunc:()=>void}> = ({title,closeFunc}) => {
  return(
  <div className=" fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>

    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

      <div className="py-4 text-center px-6">
        {/* <!--Title--> */}
        <div className="flex justify-center pb-3">
          <p className="text-2xl font-bold text-red-400">{title}</p>
        </div>

        {/* <!--Footer--> */}
        <div className="flex justify-end pt-2">
          <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
            Action
          </button>
          <button onClick={()=>{closeFunc();}
              } className="px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>)
};
