import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import CategoryCard from '../../../components/CategoryCard';

const Categories = () => {

    const [products, setProducts] = useState([]);
    const axiosInstance = useAxios();
    useEffect(() => {
        axiosInstance.get('/categories/4/products')
            .then(data => {
                setProducts(data.data);
                console.log(data.data)
            })
    }, [axiosInstance])

    return (
        <div className="bg-[#232321] mt-4 lg:mt-32">
            <div className="max-w-7xl mx-auto">

                <div className="pt-10 lg:pt-20 pb-10">
                    <h2 className="text-white text-2xl lg:text-7xl font-semibold uppercase">
                        Categories
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-tl-[40px] overflow-hidden">
                    {products.slice(0, 2).map((item, index) => (
                        <CategoryCard key={item.id} item={item} index={index} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Categories;