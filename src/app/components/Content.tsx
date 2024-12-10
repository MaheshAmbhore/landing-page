import Image from "next/image";

const Content = () => {
    return (
        <div>
    <div className="bg-[#E2F5FB] min-h-96">
            <h6 className="text-7xl text-blue font-bold place-self-center p-5">Essential Vitamins</h6>
            <div className="grid grid-cols-3 ">
                <div className="self-center m-auto">
                    <p className="text-sm">Online Medical Supplies</p>
                    <h6 className="text-blue">Get Your Vitamins & Minerals</h6>
                    <button className="bg-[#17414F] rounded-full p-1 pl-4 pr-4 text-sm text-white">Explore</button>
                </div>
                <div>
                    <div className="w-72 h-64 bg-[#FFE9B5] rounded-tl-tl-30 rounded-br-br-30 mt-6 relative">
                    <Image src='./images/probiotics.svg' alt="probiotics-image" className="w-72 -top-20 -left-3 absolute" width={100} height={80} />
                    </div>
                </div>
                <div className="gap-3">
                    <div className="flex gap-3">
                        <Image src='./images/vitamis-logo.svg' alt="vitamins-logo" width={40} height={40} />
                        <div>
                            <h2 className="text-base text-blue" >Vitamins</h2>
                            <div className="text-xs">
                                <p>Increased Vitamins and <br />minerals in your diet</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Image src='./images/weight-loss-logo.svg' alt="weight-loss-logo" width={40} height={40} />
                        <div>
                            <h2 className="text-base text-blue">Weight Loss</h2>
                            <div className="text-xs">
                                <p>Weight Loss</p>
                                <p>Find Scientifically proven solutions</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Image src='./images/weight-loss-logo.svg' alt="weight-loss-logo" width={40} height={40} />
                        <div>
                            <h2 className="text-base text-blue">Functional Foods</h2>
                            <div className="text-xs">
                                <p>Functional Foods</p>
                                <p>From protein powers to baby formula</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-[#17414F] w-3/4 m-auto rounded-3xl relative">
            <div className="grid grid-cols-3 gap-7 relative -top-9 ">
                <div className="place-items-center">
                    <div className="w-16 h-16 bg-white place-content-center rounded-full">
                    <Image src='./images/clinically-studied-icon.svg' alt="clinically-icon" width={40} 
                    height={40} className="w-1/3 m-auto"/>
                    </div>
                    <h3 className="text-white text-lg p-3">Clinically Studied</h3>
                    <p className="text-whiteLight text-xs text-center">All products that we offer have <br/> undergone lab and safety tests</p>
                </div>
                <div className="place-items-center">
                    <div className="w-16 h-16 bg-white place-content-center rounded-full">
                    <Image src='./images/vegeterian-icon.svg' alt="vegeterian-icon" width={40} 
                    height={40} className="w-1/3 m-auto"/>
                    </div>
                    <h3 className="text-white text-lg p-3">Vegeterian Friendly</h3>
                    <p className="text-whiteLight text-xs text-center">We have a wide selection of vegeterian <br/> products to meet your needs</p>
                </div>
                <div className="place-items-center">
                    <div className="w-16 h-16 bg-white place-content-center rounded-full">
                    <Image src='./images/made-in-India.svg' alt="made-in-India-icon" width={40} 
                    height={40} className="w-1/3 m-auto"/>
                    </div>
                    <h3 className="text-white text-lg p-3">Made In India</h3>
                    <p className="text-whiteLight text-xs text-center">Shop local and explore health products <br/> made right here in India</p>
                </div>
                <div className="place-items-center">
                    <div className="w-16 h-16 bg-white place-content-center rounded-full">
                    <Image src='./images/free-shipping-icon.svg' alt="clinically-icon" width={40} 
                    height={40} className="w-1/3 m-auto"/>
                    </div>
                    <h3 className="text-white text-lg p-3">Free Shipping</h3>
                    <p className="text-whiteLight text-xs text-center">We deliver to your door with no <br/>shipping costs on your orders</p>
                </div>
                <div className="place-items-center">
                    <div className="w-16 h-16 bg-white place-content-center rounded-full">
                    <Image src='./images/no-risk-icon.svg' alt="clinically-icon" width={40} 
                    height={40} className="w-1/3 m-auto"/>
                    </div>
                    <h3 className="text-white text-lg p-3">No Risk</h3>
                    <p className="text-whiteLight text-xs text-center">We ensure that all products are safe <br/> and within their use-by date</p>
                </div>
                <div className="place-items-center">
                    <div className="w-16 h-16 bg-white place-content-center rounded-full">
                    <Image src='./images/gmo-free-icon.svg' alt="clinically-icon" width={40} 
                    height={40} className="w-1/3 m-auto"/>
                    </div>
                    <h3 className="text-white text-lg p-3">GMO Free</h3>
                    <p className="text-whiteLight text-xs text-center">Natural no modified products and <br/>derivatives for those who need it</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Content;