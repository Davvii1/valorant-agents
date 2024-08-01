import { agentsMap } from "@/helpers/agents"
import Link from "next/link"

export const PrimaryButton = () => {
    return (
        <Link href={`/agents/${agentsMap[0]}`} className="bg-primary rounded-lg text-white px-4 py-2.5 uppercase font-black text-[1.25rem]">
            Browse Agents
        </Link>
    )
}
