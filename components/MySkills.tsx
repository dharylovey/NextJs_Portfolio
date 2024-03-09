'use client'

import { skills } from "@/lib/data"
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"

import { accordionData } from "@/lib/data";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

const MySkills = () => {

    return (
        <section id="myskills" className="container py-16 min-h-screen max-w-[50rem]">
            <div className="flex flex-col items-center justify-center">
                <div className="text-center">
                    <h3 className="text-5xl font-bold">My Skills</h3>
                </div>
                <ul className="flex max-w-[50rem] gap-4 py-16 justify-center flex-wrap text-lg text-gray-500">
                    {skills.map((skill, idx) => (
                        <motion.li
                            key={idx}
                            className="text-center bg-white border-black/[0.1] rounded-lg px-5 py-1 shadow-lg cursor-pointer"
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: false,
                            }}
                            custom={idx}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>

            <div className="flex justify-center">
                <Accordion
                    type="single"
                    className="w-[90%]"
                >
                    {accordionData.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={`item-${item.id}`}
                        >
                            <AccordionTrigger>
                                <div className="w-full gap-5">
                                    {item.label}
                                    <Progress 
                                        className="w-[95%] mt-2"
                                        value={item.progress}
                                        indicatorColor="bg-slate-500"
                                        />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default MySkills
