import Image from "next/image";
import { aboutMe } from "@/lib/data";
import Link from "next/link";
import { Tech } from "@/components/ui/Tech";



export default function Component() {
  return (
    <section id="about" className="py-16 ">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center ">
          <p className="my-4 text-xl text-gray-500">Know me more</p>
          <h3 className="text-5xl font-bold">About Me</h3>
        </div>

        <div className="flex flex-row justify-around w-full py-16">
          <div className="flex items-center justify-start px-12 my-10 basis-1/4">
            <Image
              src="/image/about-image.png"
              height={225}
              width={400}
              alt="about image"
              className="justify-center object-cover aspect-auto rounded-xl shadow-2xl"
              priority={true}
            />
          </div>

          <div className="flex flex-col justify-center px-24 basis-3/4">
            <ul className="flex justify-around gap-8 my-10">
              {aboutMe.map((skill) => (
                <li
                  key={skill.header}
                  className="flex flex-col items-center justify-center w-full p-5 border border-slate-500/[0.5] rounded-xl shadow-xl bg-white"
                >
                  <Image
                    src={skill.src}
                    width={30}
                    height={30}
                    alt={skill.header}
                  />
                  <h3 className="py-2 text-xl font-semibold text-gray-800">
                    {skill.header}
                  </h3>
                  {Array.isArray(skill.desc) ? (
                    <>
                      {skill.desc.map((item, index) => (
                        <div key={index}>
                          <p className="py-1 text-base text-center text-gray-500 md:text-lg">
                            {item.course}
                          </p>
                          <Link
                            href={item.link}
                            className="text-xs text-center text-indigo-500 hover:text-red-500 hover:underline"
                            target="_blank"
                          >
                            <p>{item.school}</p>
                          </Link>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p className="py-2 text-base text-center text-gray-500 md:text-lg">
                      {skill.desc}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 md:text-xl">
                    {skill.footer}
                  </p>
                </li>
              ))}
            </ul>

            <div>
              <p className="mx-auto text-gray-500 md:text-xl ">
                {`
As a junior full stack developer, I'm enthusiastic about delivering into the dynamic realm of software development. Equipped with a solid grasp of both front-end and back-end technologies, I'm keen to make meaningful contributions to innovative projects and collaborate closely with seasoned colleagues. My dedication to coding fuels my quest for continuous learning and adaptation to emerging technologies, ensuring that I remain abreast of the latest industry standards. I eagerly anticipate applying my skills in `}
                <Tech />

                {`to craft intuitive user interfaces and robust backend systems. Embarking on this journey, my commitment lies in delivering top-notch code while embracing challenges as invaluable opportunities for personal and professional growth.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
