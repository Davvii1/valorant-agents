import Image from "next/image";

interface Props {
    title: string;
    description: string;
    image: string;
}

export const AbilityBox = ({ title, description, image }: Props) => {
    return (
        <div className="w-full group flex flex-col 2xl:flex-row space-x-0 space-y-4 2xl:space-y-0 2xl:hover:space-x-4 bg-primary rounded-lg 2xl:h-[12.5rem] 2xl:w-[12.5rem] 2xl:hover:w-[40rem] p-[20px] text-white">
            <div className="w-24 h-24 min-w-24 min-h-24 2xl:min-w-[10rem] 2xl:w-[10rem] 2xl:min-h-[10rem] 2xl:h-[10rem] aspect-square">
                <div className="relative w-full h-full">
                    <Image src={image} alt={title + ' image'} fill quality={100} placeholder="blur" blurDataURL={image} priority />
                </div>
            </div>
            <div className="w-full 2xl:group-hover:w-full no-scrollbar h-fit 2xl:group-hover:h-[12.5rem] 2xl:max-w-[30rem] group-hover:overflow-y-auto 2xl:h-0 2xl:w-0 overflow-hidden transition-width ease-out duration-300">
                <h3 className="text-sm 2xl:text-[1.5rem] font-black uppercase">{title}</h3>
                <p className="text-xs 2xl:text-[0.75rem] font-black uppercase">
                    {description}
                </p>
            </div>
        </div>
    )
}
