import Image from "next/image";

const Footer = () => {
    return (
        <div className=" bg-blue">
            <div className="place-items-center">
                <div className="grid grid-cols-3 gap-10 w-4/5 p-5">
                    <div className="bg-[#215D72] flex gap-4 p-3 rounded-xl">
                        <Image src='./images/phone-icon.svg' alt="phone-image" width={50} height={50} />
                        <div className="text-white text-start text-xs place-content-center ">
                            <p>Phone Number</p>
                            <p>+974 3118 1843</p>
                        </div>
                    </div>
                    <div className="bg-[#215D72] flex gap-4 p-3 rounded-xl">
                        <Image src='./images/email-icon.svg' alt="email-image" width={50} height={50} />
                        <div className="text-white text-start text-xs place-content-center ">
                            <p>Email Address</p>
                            <p>Elbrithcqhr@gmail.com</p>
                        </div>
                    </div>
                    <div className="bg-[#215D72] flex gap-4 p-3 rounded-xl">
                        <Image src='./images/location-icon.svg' alt="location-image" width={50} height={50} />
                        <div className="text-white text-start text-xs place-content-center ">
                            <p>Office Location</p>
                            <p>Ambassador Street, Zone 61,</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" place-items-center">
                <div className="text-white text-xs flex gap-10 w-4/5 p-5">
                    <div className="h-12 w-1/4 bg-white mb-9">
                        <Image src="/images/elbrit-icon.svg" alt="elbrit-icon" width={50} height={50} className="w-full m-auto" />
                    </div>
                    <p className="pl-10">Your health, physical and emotional well-being is important <br /> to us. We are always by your side and have made it even <br /> easier for you to find the necessary vitamins.</p>
                </div>
                
            </div>
            <div className="place-content-start text-xs text-white w-4/5">
                    <p>Elbrit Life Sciences Private Limites</p>
                </div>


        </div>
    )
}
export default Footer;