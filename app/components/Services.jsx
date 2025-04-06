import { assets, serviceData } from '@/assets/assets'
import {motion} from 'motion/react'
import Image from 'next/image'
import React from 'react'

function Services({isDarkMode}) {
    return (
        <motion.div
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        id='service' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center mb-2 text-lg font-Ovo'> What I offer</motion.h4>
            <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center text-5xl font-Ovo'>My Services </motion.h2>
            <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className='text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo' >
                I'm a frontend developer from Pune, India with over 4+ years of experience in companies TCS and Amdocs.</motion.p>

            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div 
                    whileHover={{scale: 1.05}}
                    transition={{ duration: 0.1 }}
                    key={index}
                    className= 'border border-gray-400 rounded-1g px-8 py-12 hover: shadow-black cursor-pointer hover:-translate-y-2 duration-500 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-amber-100 dark:hover:bg-[#2a004a] dark:hover:shadow-white'>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-1g my-4 text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more <Image src={assets.right_arrow} alt='' className='w-4' />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services