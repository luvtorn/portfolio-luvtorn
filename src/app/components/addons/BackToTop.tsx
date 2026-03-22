'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const BackToTop = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setVisible(true)
			} else {
				setVisible(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.4 }}
			className='h-40 w-30 fixed -bottom-5 right-5 rounded-full hidden items-center justify-center flex-col gap-3 cursor-pointer z-30 sm:flex'
			onClick={scrollToTop}
		>
			<div className='rounded-full bg-linear-to-r from-secondary to-primary p-1.5 hover:scale-110 transition-all'>
				<FaArrowUp color='white' size={20} />
			</div>
		</motion.div>
	)
}

export default BackToTop
