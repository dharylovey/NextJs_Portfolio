'use client'
import { useInView } from "react-intersection-observer";
import React from 'react';
import Image from 'next/image';
import { expData } from '@/lib/data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0
  });
  return (
    <section id="experience" className='visible' ref={ref}>
      <div className='flex flex-col items-center justify-center'>
        <p className="my-4 text-xl text-gray-500">Explore My</p>
        <h3 className="mb-10 text-5xl font-bold">My Experience</h3>
      </div>
      <VerticalTimeline
        lineColor=""
        animate={true}
      >
        {
          expData.map((item, idx) => (
            <React.Fragment key={idx}>
              <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                  background: 'inherit',
                  boxShadow: 'none',
                  border: '1.5px solid rgba(0,0,0, 0.2)',
                  textAlign: 'left',
                  padding: '1.2rem 2rem',
                  borderRadius: '0.75rem',
                  borderColor: 'rgb(100 116 139)',
                }}
                icon={item.icon}
                iconStyle={{
                  background: 'white',
                  fontSize: '1rem',
                }}
                date={item.date}
                className="vertical-timeline-element--work"
                contentArrowStyle={{
                  borderRight: '0.5rem solid rgb(100 116 139)'
                }}
              >
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt={item.skill}
                    className="rounded"
                  />
                  <h3>{item.skill}</h3>
                </div>
                <p>{item.desc}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </section>
  )
}

export default Experience;
