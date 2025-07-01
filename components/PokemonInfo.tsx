import Image from "next/image";

  function TitleRow() {
    return (
      <div className="flex flex-row w-full justify-center mb-10 mt-10">
        <div className="text-xl font-bold uppercase">Mewtwo</div>
      </div>
    );
  }


  function InfoRow(){ 
    return (
      <div className="flex flex-row justify-center w-full gap-4 capitalize">
        <div className="w-[40%] flex justify-end text-sm font-light">type:</div>
        <div className="w-[40%] flex justify-start text-sm font-bold">this</div>
      </div>
    );
  }

  function AdditionalInfo(){
    return (
      <div className="flex flex-row justify-around w-full gap-4 p-3 capitalize">
        <div className="w-[40%] flex flex-col items-center justify-end text-sm">
          <div className="">abillity</div>
         <div className="font-bold">unnerve</div>
        </div>
        <div className="w-[40%] flex flex-col items-center text-sm">
         <div className="">hidden abillity</div>
         <div className="font-bold ">pressure</div>
        </div></div>
    );
  }

  
const mewtwo = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg";

export default function PokemonInfo() {

  return (  
    <div className="w-[80%] h-[75%] m-auto border p-10 align-middle border-white bg-white/10 rounded-lg shadow-md relative">
      <Image
        src="/arrow-down.png"
        alt="Arrow Logo"
        width={30}
        height={30}
        className=" ml-6 mt-10 h-auto w-auto absolute top-0 left-0 self-center animate-bounce hover:scale-110 cursor-pointer rotate-90  transition-all duration-300"
      />
    <div className=" flex flex-row p-4 h-full w-full gap-50"> 
    <div className=" w-[50%] flex flex-row justify-center items-center">
      <Image
        src={mewtwo}
        alt="Mewtwo"
        width={450}
        height={100}
        priority={true}
        className=""
      />
    </div>
    <div className=" bg-white/20 w-[50%] rounded-xl flex flex-col justify-evenly pb-10">
      <TitleRow />
      <InfoRow />
      <InfoRow />
      <InfoRow />     
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <AdditionalInfo />
    </div>    
    </div>
    </div>
  );
}