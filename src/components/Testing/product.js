import React from "react";
import productInfos from "./producInfos";

function Note() {
    //   return (
    //     <div className="note">
    //       <h1>{props.title}</h1>
    //       <p>{props.content}</p>
    //     </div>
    //   );

    return (

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
           
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                {productInfos.map(props=> (
                       <tbody>
                       <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                           <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {props.productName}
                           </th>
                           <td class="px-6 py-4">
                              {props.color}
                           </td>
                           <td class="px-6 py-4">
                              {props.id}
                           </td>
                           <td class="px-6 py-4">
                              {props.price}
                           </td>
                           <td class="pt-2 pb-2 text-right flex justify-around">
                               <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                   Edit</button>
                               <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                   Delete</button>
                           </td>
                       </tr>
                   </tbody>
                ))}
             
            </table>
       
        </div>

    );

}

export default Note;

