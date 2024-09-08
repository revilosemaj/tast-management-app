import BackgroundText from "@/components/BackgroundText";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <BackgroundText />
      <div className="h-[75vh] w-[70vw] fixed bottom-[15vh] right-[15vw] bg-white rounded-xl opacity-70">
        <Main />
      </div>
    </>
  );
}
