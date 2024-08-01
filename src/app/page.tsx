import Image from "next/image";
import { Logo, PrimaryButton } from "@/components";

export default function Home() {
  return (
    <main className="relative w-full h-full bg-secondary overflow-hidden">
      <div id="cubes">
        <div className="absolute bottom-5 left-5 grid grid-cols-3 w-fit gap-1 z-10">
          <div className="size-6 bg-[#00FFDF]"></div>
          <div className="size-6 bg-[#00FFDF]"></div>
          <div className="size-6 bg-[#00FFDF]"></div>
          <div className="size-6 bg-[#00FFDF]"></div>
        </div>

        <div className="absolute top-5 right-5 grid grid-cols-3 w-fit gap-1 z-10">
          <div className="size-6 bg-[#00FFDF]"></div>
          <div></div>
          <div></div>
          <div className="size-6 bg-[#00FFDF]"></div>
          <div className="size-6 bg-[#00FFDF]"></div>
          <div className="size-6 bg-[#00FFDF]"></div>
        </div>

        <div className="hidden md:flex absolute space-x-1 top-1/3 left-24 z-10">
          <div className="size-10 bg-[#00FFDF]"></div>
          <div className="size-10 bg-[#00FFDF]"></div>
          <div className="size-10 bg-[#00FFDF]"></div>
          <div className="size-10 bg-[#00FFDF]"></div>
        </div>

        <div className="hidden md:flex absolute space-x-1 bottom-1/3 right-24 z-10">
          <div className="size-10 bg-[#00FFDF]"></div>
          <div className="size-10 bg-[#00FFDF]"></div>
          <div className="size-10 bg-[#00FFDF]"></div>
          <div className="size-10 bg-[#00FFDF]"></div>
        </div>
      </div>

      <div id="frames" className="absolute z-20 flex w-screen h-screen p-12">
        <div className="w-1/2 h-full flex">
          <div className="border-t-2 border-l-2 border-[#5F5757] size-48 left-0 top-0"></div>
        </div>
        <div className="w-1/2 h-full flex justify-end items-end">
          <div className="border-b-2 border-r-2 border-[#5F5757] size-48 right-0 bottom-0"></div>
        </div>
      </div>

      <div id="agents" className="hidden 2xl:flex absolute z-30 max-w-screen w-screen max-h-screen h-screen top-0 left-0">
        <div className="w-1/2 relative h-full">
          <div className="w-[861px] h-[782.16px] absolute m-auto inset-y-0 -translate-y-32 -left-32">
            <Image src="/home-characters/sage.png" alt="Sage Image" layout="fill" />
          </div>
          <div className="w-[861px] h-[782.16px] absolute m-auto inset-y-0 inset-x-0">
            <Image src="/home-characters/reyna.png" alt="Reyna Image" layout="fill" />
          </div>
        </div>

        <div className="w-1/2 relative h-full">
          <div className="w-[861px] h-[782.16px] absolute m-auto -right-32 inset-y-0 -translate-y-32">
            <Image src="/home-characters/cypher.png" alt="Cypher Image" layout="fill" />
          </div>
          <div className="w-[861px] h-[782.16px] absolute m-auto inset-y-0 inset-x-0">
            <Image src="/home-characters/jett.png" alt="Jett Image" layout="fill" />
          </div>
        </div>
      </div>

      <div id="mid-agent" className="max-w-[861px] h-fit max-h-screen aspect-square absolute m-auto inset-y-0 inset-x-0 hidden md:block 2xl:hidden">
        <Image src="/home-characters/jett.png" alt="Jett Image" layout="fill" />
      </div>

      <div id="title" className="flex flex-col items-center justify-center h-screen z-50 relative">
        <div className="h-64 sm:h-80">
          <Logo />
        </div>
        <div className="flex flex-col items-center -space-y-[2rem] xl:-space-y-[5rem]">
          <h1 className="text-primary font-black uppercase text-[3.5rem] sm:text-[4.5rem] xl:text-[9.375rem]">Valorant</h1>
          <h1 className="text-primary font-black uppercase text-[2.5rem] sm:text-[3.5rem] xl:text-[6.25rem]">Agents</h1>
        </div>
        <PrimaryButton />
      </div>
    </main>
  );
}
