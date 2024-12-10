import Image from "next/image";

const Header = ()=>{
    return(
        <div>
            <Image 
                src='./images/elbrit-logo.svg'
                alt="logo"
                width={32}
                height={32}
            />
        </div>
    )
}
export default Header;