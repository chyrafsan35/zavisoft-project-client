import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import leg from "../../assets/leg.png";
import front from "../../assets/front.png";
import back from "../../assets/back.png";
import Button from "../../components/Button";
import Suggestions from "../shared/Suggestions";
import ShoeLoading from "../../components/ShoeLoading";
import ErrorPage from "../ErrorPage/ErrorPage";

const ProductDetails = () => {
    const { id } = useParams();
    const axios = useAxios();

    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

    useEffect(() => {
        axios.get(`/products/${id}`).then((res) => {
            if (!res.data) {
                setError(true);
            } else {
                setProduct(res.data);
            }
        }).finally(() => {
            setLoading(false);
        });
    }, [id]);

    const images = [
        product?.images?.[0],
        leg,
        front,
        back,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return <ShoeLoading></ShoeLoading>
    }

    if (error) {
        return <ErrorPage status={404} message="Product Not Found" />;
    }

    return (
        <div className="max-w-[1400px] mx-auto px-4 lg:px-10 pt-8" >

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-8">

                <div className="lg:col-span-2">

                    <div className="lg:hidden">

                        <div className="relative w-full h-[380px] overflow-hidden rounded-[24px] bg-gray-100">
                            <div
                                className="flex transition-transform duration-500 ease-in-out h-full"
                                style={{ transform: `translateX(-${currentImage * 100}%)` }}
                            >
                                {images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt=""
                                        className="w-full h-full object-cover flex-shrink-0"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center gap-2 mt-3">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`w-2 h-2 rounded-full cursor-pointer ${currentImage === index
                                        ? "bg-blue-600"
                                        : "bg-gray-400"
                                        }`}
                                />
                            ))}
                        </div>

                        <div className="flex gap-3 mt-4 justify-center">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt=""
                                    onClick={() => setCurrentImage(index)}
                                    className={`w-[70px] h-[70px] object-cover rounded-lg cursor-pointer ${currentImage === index
                                        ? "ring-2 ring-blue-500"
                                        : ""
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:grid grid-cols-2 gap-6">
                        <img
                            src={product.images?.[0]}
                            className="w-full h-[510px] object-cover rounded-tl-[48px]"
                            alt=""
                        />
                        <img
                            src={leg}
                            className="w-full h-[510px] object-cover rounded-tr-[48px]"
                            alt=""
                        />
                        <img
                            src={front}
                            className="w-full h-[510px] object-cover rounded-bl-[48px]"
                            alt=""
                        />
                        <img
                            src={back}
                            className="w-full h-[510px] object-cover rounded-br-[48px]"
                            alt=""
                        />
                    </div>
                </div>

                <div className="space-y-6">

                    <Button>New Release</Button>

                    <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                        {product.title}
                    </h1>

                    <p className="text-2xl font-semibold text-[#4A69E2]">
                        ${product.price}.00
                    </p>

                    <div>
                        <p className="font-medium">Color</p>
                        <p className="text-gray-600">
                            Shadow Navy / Army Green
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <p className="font-medium">Size</p>
                            <button className="text-sm underline text-gray-500">
                                Size chart
                            </button>
                        </div>

                        <div className="grid grid-cols-5 gap-3 mt-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`border py-2 rounded-lg ${selectedSize === size
                                        ? "bg-black text-white"
                                        : "hover:bg-gray-100"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full bg-black text-white py-3 rounded-xl">
                            Add to cart
                        </button>

                        <button className="w-full bg-[#4A69E2] text-white py-3 rounded-xl">
                            Buy it now
                        </button>
                    </div>

                    <div className="pt-2">
                        <h3 className="font-semibold mb-2">
                            About the product
                        </h3>

                        <p className="text-gray-600 mb-2">
                            Shadow Navy / Army Green
                        </p>

                        <ul className="text-gray-600 list-disc pl-5 space-y-2 text-sm">
                            <li>
                                This product is excluded from all promotional discounts and offers.
                            </li>
                            <li>
                                Pay over time in interest-free installments with Affirm, Klarna or Afterpay.
                            </li>
                            <li>
                                Join adiClub to get unlimited free standard shipping, returns, & exchanges.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <Suggestions></Suggestions>

        </div>
    );
};

export default ProductDetails;