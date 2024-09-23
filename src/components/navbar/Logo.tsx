import Image from "next/image";
import { logo } from "../../assets/logo";

const Logo = () => {
  return (
    <div>
        <Image src={logo} width={150} height={150} alt="logo"/>
    </div>
  )
}

export default Logo;