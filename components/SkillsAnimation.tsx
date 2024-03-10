import { techStacks } from "@/lib/data"
import Image from "next/image"

const SkillsAnimation = () => {
    return (
        <div className="flex justify-center item-center overflow-hidden space-x-16">
            {techStacks.map((item, idx) => (
                <div key={idx}>
                    <div className="flex space-x-16 animate-loop-scroll">
                        <Image
                            src={item.src}
                            width={50}
                            height={50}
                            alt={item.alt}
                            className="max-w-none"
                        />
                    </div>
                    <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
                        <Image

                            src={item.src}
                            width={50}
                            height={50}
                            alt={item.alt}
                            className="max-w-none"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillsAnimation
