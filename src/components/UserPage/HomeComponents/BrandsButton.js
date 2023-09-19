import React from 'react';
import "../css/categories.css";
import brandData from '../../Data/brandsData';

function BrandButton() {
    return (
        <div className="m-1 p-1 rounded-xl">
            <h2 className="mt-4 text-xl font-bold">Brands</h2>
            <div className="shadow-2xl p-8 rounded flex flex-wrap gap-2">
                {brandData.map(props => (
                    <a href={props.name} key={props.name}>
                        <button
                            type="button"
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                            {props.name}
                        </button>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default BrandButton;
