import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

function About({ isDarkMode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'> Introduction</motion.h4>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'> About me</motion.h4>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3x1' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className='flex-1'>
                    <p className='mb-10 max-w-2x] font-Ovo'
                    >I'm a passionate Frontend Developer with 4+ years of experience building scalable, beautiful UIs using Angular, React, and Next.js, and have contributed to projects spanning Micro-Frontend architectures and AI-powered chatbots. <br />
                    I also bring full-stack expertise with backend frameworks like Node.js and Spring Boot, and I'm keen on exploring Angular internals, Signals, and modern dev tooling.
                    Beyond coding, I actively share insights on LinkedIn about Angular, GenAI tools, and modern dev workflows.</p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2x]'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => {
                            return <motion.li
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.1 }}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-amber-100 hover:-translate-y-2 duration-500 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:border-white dark:hover:shadow-white dark:hover:bg-[#2a004a]/50' key={index}>
                                <Image src={isDarkMode ? iconDark : icon} height={icon?.height} width={icon?.width} alt={title} className='w-7mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        })}
                    </motion.ul>
                    <motion.h4
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => {
                            return <motion.li
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.1 }}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-2 duration-500 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]'
                                key={index}>
                                <Image src={tool} alt={tool} className='w-5 sm:w-7' />
                                <span>{tool.name}</span>
                            </motion.li>
                        })}
                    </motion.ul>
                </ motion.div>
            </ motion.div>
        </motion.div>
    )
}

export default About