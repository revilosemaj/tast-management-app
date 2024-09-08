import BackgroundText from "@/components/BackgroundText";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BackgroundText />
      <div className="h-[75vh] w-[70vw] fixed bottom-[15vh] right-[15vw] bg-white rounded-xl opacity-85">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
