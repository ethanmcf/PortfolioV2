import Bitmoji from "@/images/bitmoji.png";
import Image from "next/image";
import Header from "@/components/Header";
export default function Home() {
  return (
    <main className="flex-1 background">
      <Header />
      <text>world</text>
      <Image src={Bitmoji} alt={"bitmoji"} className="w-50 h-50" />
    </main>
  );
}
