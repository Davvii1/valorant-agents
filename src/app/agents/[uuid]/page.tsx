import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AbilityBox, NavigationButton, SecondaryButton } from "@/components";
import { agentsMap, getAgent, getNextAgent, getPreviousAgent } from "@/helpers/agents";

export async function generateStaticParams() {
    const agents = agentsMap.map((uuid) => uuid);
    return agents;
}

export async function generateMetadata({ params }: { params: { uuid: string } }): Promise<Metadata> {
    try {
        const agent = await getAgent(params.uuid);

        return {
            title: `${agent.displayName} - Valorant Agents`,
            description: `${agent.displayName} assets and abilities showcase`
        }
    } catch (error) {
        return {
            title: `Agent Not Found`,
            description: `Agent not found in the Valorant API`
        }
    }
}

export default async function Agents({ params }: { params: { uuid: string } }) {
    const agent = await getAgent(params.uuid);

    return (
        <main className="w-full h-full 2xl:h-full max-w-screen 2xl:max-h-screen bg-center bg-cover bg-[url('/background-haven.png')] 2xl:overflow-hidden">
            <div className="w-full max-h-screen overflow-y-auto relative 2xl:static">
                <div className="fixed top-0 left-0 bg-black bg-opacity-40 w-screen h-screen"></div>
                <div className="hidden 2xl:block absolute top-0 left-0 w-fit h-screen overflow-hidden">
                    <div className="2xl:w-[1186px] 2xl:h-[1920px] min-[1921px]:h-[150vh] -top-[20rem] -left-[15rem] relative opacity-20">
                        <Image src={agent.background}
                            alt="Reyna Background Image"
                            fill
                            quality={100}
                        />
                    </div>
                </div>
                <div className="hidden 2xl:block absolute top-0 right-0 w-fit h-screen overflow-hidden">
                    <div className="2xl:w-[1186px] 2xl:h-[1920px] min-[1921px]:h-[150vh] -top-[20rem] -right-[15rem] relative opacity-20">
                        <Image src={agent.background}
                            alt="Reyna Background Image"
                            fill
                            quality={100}
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full overflow-hidden">
                    <div className="order-3 relative 2xl:absolute top-0 left-0 z-20 w-full max-w-screen h-fit 2xl:h-full aspect-[16/9]">
                        <Image src={`/fullscreen-characters/${agent.displayName.toLowerCase().replaceAll("/", "")}.png`} alt={`${agent.displayName} Image`} fill quality={100} />
                    </div>
                    <p className="uppercase mt-20 order-2 2xl:absolute z-30 text-white font-tungsten text-[10rem] md:text-[12rem] 2xl:text-[25rem] left-12 bottom-5 leading-none text-center 2xl:text-start">
                        {agent.displayName}
                    </p>
                    <div className="order-1 2xl:absolute top-5 left-5 z-40">
                        <SecondaryButton />
                    </div>
                    <div className="flex space-x-4 absolute left-1/2 -translate-x-1/2 2xl:bottom-5 top-20 2xl:top-auto z-40">
                        <Link href={`/agents/${getPreviousAgent(agent.uuid)}`}>
                            <NavigationButton />
                        </Link>
                        <div className="rotate-180">
                            <Link href={`/agents/${getNextAgent(agent.uuid)}`}>
                                <NavigationButton />
                            </Link>
                        </div>
                    </div>
                    <div className="px-6 2xl:px-0 mt-6 mb-4 2xl:mt-0 2xl:mb-0 order-4 bottom-1/2 space-y-2 2xl:translate-y-1/2 2xl:absolute z-40 right-10 w-full max-w-full 2xl:w-[40rem] flex flex-col items-end">
                        <AbilityBox
                            title={agent.abilities[0].displayName}
                            description={agent.abilities[0].description}
                            image={agent.abilities[0].displayIcon}
                        />
                        <AbilityBox
                            title={agent.abilities[1].displayName}
                            description={agent.abilities[1].description}
                            image={agent.abilities[1].displayIcon}
                        />
                        <AbilityBox
                            title={agent.abilities[2].displayName}
                            description={agent.abilities[2].description}
                            image={agent.abilities[2].displayIcon}
                        />
                        <AbilityBox
                            title={agent.abilities[3].displayName}
                            description={agent.abilities[3].description}
                            image={agent.abilities[3].displayIcon}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
