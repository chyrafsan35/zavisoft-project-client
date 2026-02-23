import React, { useEffect, useState, useRef } from "react";
import useAxios from "../../hooks/useAxios";
import ProductCard from "../../components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Suggestions = () => {
    const [products, setProducts] = useState([]);
    const [current, setCurrent] = useState(0);
    const axiosInstance = useAxios();
    const intervalRef = useRef(null);

    useEffect(() => {
        axiosInstance.get("/categories/4/products").then((res) => {
            setProducts(res.data);
        });
    }, []);

    const visibleProducts = products.slice(1, 9);
    const itemsPerView = 4;
    const totalSlides = Math.ceil(
        visibleProducts.length / itemsPerView
    );

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === totalSlides - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? totalSlides - 1 : prev - 1
        );
    };

    useEffect(() => {
        if (totalSlides <= 1) return;

        intervalRef.current = setInterval(() => {
            setCurrent((prev) =>
                prev === totalSlides - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(intervalRef.current);
    }, [totalSlides]);

    const pauseAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    const resumeAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrent((prev) =>
                prev === totalSlides - 1 ? 0 : prev + 1
            );
        }, 2000);
    };

    return (
        <div className="mt-16">

            <div className="flex justify-between items-center">
                <h2 className="text-2xl lg:text-5xl font-semibold">
                    You may also like
                </h2>

                <div className="flex gap-2">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            <div
                className="relative mt-8 overflow-hidden"
                onMouseEnter={pauseAutoSlide}
                onMouseLeave={resumeAutoSlide}
            >
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    {Array.from({ length: totalSlides }).map(
                        (_, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="min-w-full grid grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                                {visibleProducts
                                    .slice(
                                        slideIndex * itemsPerView,
                                        slideIndex * itemsPerView +
                                        itemsPerView
                                    )
                                    .map((shoe) => (
                                        <ProductCard
                                            key={shoe.id}
                                            shoe={shoe}
                                        />
                                    ))}
                            </div>
                        )
                    )}
                </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: totalSlides }).map(
                    (_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-2 w-8 rounded-full cursor-pointer transition-all ${current === index
                                ? "bg-blue-600"
                                : "bg-gray-300"
                                }`}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Suggestions;