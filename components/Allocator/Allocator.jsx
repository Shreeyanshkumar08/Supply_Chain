// import React from "react";
// import Avatar from "../UI/Avatar";
// import AvailableResource from "./AvailableResource";

// const Allocator = ({ allocator }) => {
//   return (
//     <div>
//       {/* {JSON.stringify(allocator)} */}
//       <div className="flex items-center p-4">
//         <Avatar src={allocator?.name} />
//         <div className="flex flex-col ml-4">
//           <h1 className="">{allocator?.name}</h1>
//           <h1 className="">{allocator?.email}</h1>
//         </div>
//       </div>
//       {allocator?.resourcesClassified.available.map((el) => (
//         <AvailableResource res={el} key={Math.random.toString()} />
//       ))}
//       {allocator?.resourcesClassified.allocated.map((el) => (
//         <AvailableResource
//           res={el}
//           allocated={true}
//           key={Math.random.toString()}
//         />
//       ))}
//       {allocator?.resourcesClassified.requests.map((el) => (
//         <AvailableResource
//           res={el}
//           requested={true}
//           key={Math.random.toString()}
//         />
//       ))}
//     </div>
//   );
// };

// export default Allocator;

import React from "react";
import Avatar from "../UI/Avatar";
import AvailableResource from "./AvailableResource";
import Link from "next/link";

const Allocator = ({ allocator }) => {
  return (
    <div className="my-6 mx-auto flex flex-col items-center">
      {/* {JSON.stringify(allocator)} */}
      <div className="flex p-4 h-[100px] w-[400px] shadow-lg text-blue-600 mx-auto">
        <Avatar src={allocator?.name} />
        <div className="flex flex-col ml-4">
          <h1 className="">
            <b>{allocator?.name}</b>
          </h1>
          <h1 className="">
            <b>{allocator?.email}</b>
          </h1>
        </div>
      </div>

      <Link href={"/resource/new"} className="text-center btn mt-12 w-1/5 py-4">
        Create new
      </Link>

      <div className="py-6 my-6 shadow-lg flex  justify-center">
        <div className="w-[400px]">
          {allocator?.resourcesClassified?.available.map((el) => (
            <AvailableResource res={el} key={Math.random.toString()} />
          ))}
        </div>
        <div className="w-[400px]">
          {allocator?.resourcesClassified?.allocated.map((el) => (
            <AvailableResource
              res={el}
              allocated={true}
              key={Math.random.toString()}
            />
          ))}
        </div>
        <div className="w-[400px]">
          {allocator?.resourcesClassified?.requests.map((el) => (
            <AvailableResource
              res={el}
              requested={true}
              key={Math.random.toString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allocator;
