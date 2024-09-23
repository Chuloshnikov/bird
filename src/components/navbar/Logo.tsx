import Image from "next/image";
import { logo1 } from "../../assets/logo";

const Logo = () => {
  return (
    <div>
        <Image src={logo1} width={50} height={50} alt="logo"/>
    </div>
  )
}

export default Logo;