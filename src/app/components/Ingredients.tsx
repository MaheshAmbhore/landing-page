import Image from "next/image";

const Ingredients = () => {
    return (
        <div className="p-28">
            <div className="flex gap-5">
            <div className="basis-3/5 p-3">
                <p className="text-[#003569] font-semibold">INGREDIENTS</p>
                <h2 className="text-3xl font-bold text-blue p-4 pl-0 ">Better Ingredients</h2>
                <p className="text-xs text-lightCol text-balance">Only the best when you choose products offered on our platform - high-quality ingredients for high quality products!</p>
            </div>
            <div className="relative">
                <Image src='./images/vitamin-C-Image.svg' alt="vitamin-c" width={32} height={32} className="w-full" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between ">
                    <div>
                        <h3 className="text-lg font-bold text-blue">Vitamin C</h3>
                        <p className="text-sm text-lightCol">Vitamin C as ascorbic acid</p>
                    </div>
                    <div>
                        <a href="" className="underline">SEE MORE</a>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image src='./images/vitamin-B3-Image.svg' alt="vitamin-b3" width={32} height={32} className="w-full" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between ">
                    <div>
                        <h3 className="text-lg font-bold text-blue">Vitamin B3</h3>
                        <p className="text-sm text-lightCol">Niacin for healthy gut and skin</p>
                    </div>
                    <div>
                        <a href="" className="underline">SEE MORE</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex gap-5 mt-5">
            <div className="relative">
                <Image src='./images/Magnesium-Image.svg' alt="magnesium" width={32} height={32} className="w-full" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between ">
                    <div>
                        <h3 className="text-lg font-bold text-blue">Magnesium</h3>
                        <p className="text-sm text-lightCol">Boost energy and support <br/>muscle function</p>
                    </div>
                    <div>
                        <a href="" className="underline">SEE MORE</a>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image src='./images/hyaluronic-Acid-Image.svg' alt="hyaluronic-acid" width={32} height={32} className="w-full" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between ">
                    <div>
                        <h3 className="text-lg font-bold text-blue">Hyaluronic Acid</h3>
                        <p className="text-sm text-lightCol">For smooth, <br/> supple and soft skin!</p>
                    </div>
                    <div>
                        <a href="" className="underline">SEE MORE</a>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image src='./images/lactobacillus-Image.svg' alt="lactobacillus" width={32} height={32} className="w-full" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between ">
                    <div>
                        <h3 className="text-lg font-bold text-blue">Lactobacillus</h3>
                        <p className="text-sm text-lightCol">Invigorate your gut <br/> microbiome</p>
                    </div>
                    <div>
                        <a href="" className="underline">SEE MORE</a>
                    </div>
                </div>
            </div>
            <div>
                <Image src='./images/ingredients-Deco-Image.svg' alt="deco-image" width={32} height={32} className="w-full"/>
            </div>
            </div>
        </div>
    )
}

export default Ingredients;