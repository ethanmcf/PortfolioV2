import Bitmoji from "@/images/bitmoji.png";
import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      <text>world</text>
      <Image src={Bitmoji} alt={"bitmoji"} />
    </main>
  );
}
