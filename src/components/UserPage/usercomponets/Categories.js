import React from 'react';
import "../css/categories.css";
import categories from "../../Testing/categories";

function CategoryList() {
    return (
        <section className="m-1 p-1 rounded-xl"> {/* Use className instead of class */}
            <h2 class="mt-4 text-xl font-bold">Categories</h2>
            <div class="shadow-2xl p-8">
                <div class="grid grid-cols-3 gap-y-0 md:grid-cols-6 lg:grid-cols-9 lg:gap-8">
                   
                    {categories.map(props => (
                         <a class="flex flex-col items-center justify-center rounded-lg p-4" href= {props.slug}>
                         <div class="h-20 w-20 inline-flex overflow-hidden rounded-full shadow-lg">
                                 <img src= {props.url} alt="" class="h-full w-full object-cover" />
                             </div>
                             <h2>{props.name}</h2>
                         </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryList;
