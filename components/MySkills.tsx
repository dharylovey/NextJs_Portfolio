'use client'

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"

import { accordionData, accordionDataTwo, skills } from "@/lib/data"


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
        <section id="myskills" className="container py-16 min-h-screen w-full max-w-[100rem]">
            <div className="flex flex-col items-center justify-center">
                <div className="text-center">
                    <h3 className="text-5xl font-bold">My Skills</h3>
                </div>
                <ul className="flex max-w-[50rem] gap-4 py-16 justify-center flex-wrap text-lg text-gray-500">
                    {skills.map((skill, idx) => (
                        <motion.li
                            key={idx}
                            className="text-center bg-white border-black/[0.1] rounded-lg px-5 py-1 shadow-lg cursor-pointer antialiased"
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={idx}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>




            <div
                className="flex flex-col justify-center lg:justify-center lg:grid md:grid-cols-2 gap-8 lg:grid-cols-2"

            >
                <Accordion
                    type="single"
                    className="w-[90%]"
                >
                    {accordionData.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={`item-${item.id}`}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-once="false"
                            data-aos-easing="ease-in-out"
                            data-aos-offset="200"
                        >
                            <AccordionTrigger>
                                <div className="w-full gap-5 text-lg antialiased">
                                    {item.label}
                                    <Progress
                                        className="w-[95%] mt-2"
                                        value={item.progress}
                                        indicatorColor="bg-sky-500"

                                    />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-lg antialiased italic border-l-8 p-4 items-center border-slate-500">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <Accordion
                    type="single"
                    className="w-[90%]"
                >
                    {accordionDataTwo.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={`item-${item.id}`}
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-once="false"
                            data-aos-easing="ease-in-out"
                            data-aos-offset="200"
                        >
                            <AccordionTrigger>
                                <div className="w-full gap-5 text-lg antialiased">
                                    {item.label}
                                    <Progress
                                        className="w-[95%] mt-2"
                                        value={item.progress}
                                        indicatorColor="bg-sky-500"
                                    />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-lg antialiased italic border-l-8 p-4 items-center border-slate-500">
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
