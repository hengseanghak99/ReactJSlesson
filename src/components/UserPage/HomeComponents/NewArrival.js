import React from 'react';
import newArrival from '../../Data/newArrival';

function NewArrivals() {
    return (
        <section className="m-1 p-1 rounded-xl">
            <h2 class="mt-4 text-xl font-bold">New Arrivals</h2>
            <div class="shadow-2xl p-8">
                <div class="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-8">
                    {newArrival.map(props => (
                        <div class="relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-2xl transform transition-transform duration-300 hover:scale-105">
                            <a href="#">
                                <img class="m-2 h-60 rounded-t-lg object-cover" src={props.url} alt="product image" />
                            </a>
                            <span class="absolute left-0 top-0 w-28 -translate-x-6 translate-y-4 -rotate-45 bg-yellow-300 text-center text-sm text-black font-bold">New</span>
                            <div class="pt-10">
                                <div class="flex items-center justify-between">
                                    <a href={props.slug} class="inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                        <h5 class="text-xl font-semibold tracking-tight text-slate-900">{props.name}</h5>
                                    </a>
                                    <p>
                                        <span class="mr-1 text-3xl font-bold text-slate-800">{props.price}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NewArrivals;
