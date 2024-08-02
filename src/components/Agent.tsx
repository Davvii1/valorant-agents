'use client'

import Image from "next/image"
import { useState } from "react"
import { Logo } from "./Logo"

export const Agent = ({ displayName }: { displayName: string }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div>
            {!isLoaded && (
                <div className="w-48 h-48 animate-breathe">
                    <Logo />
                </div>
            )}
            <Image src={`/fullscreen-characters/${displayName.toLowerCase().replaceAll("/", "")}.png`}
                onLoad={() => setIsLoaded(true)}
                alt={`${displayName} Image`}
                fill
                quality={100}
            />
        </div>
    )
}
