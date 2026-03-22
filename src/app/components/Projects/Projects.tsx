'use client'

import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Project = {
	title: string
	description: string
	image: string
	tech: string[]
	github?: string
	demo?: string
}

const projects: Project[] = [
	{
		title: 'Games Collection',
		description:
			'A collection of mini-games like Wordle, Hangman, Battleship built with React.',
		image: '/projects/games.png',
		tech: ['React', 'MobX', 'Tailwind'],
		github: 'https://github.com/luvtorn',
		demo: 'https://luvtorn.github.io/games-collection',
	},
	{
		title: 'Bookstore',
		description: 'Online bookstore with cart, filters and product management.',
		image: '/projects/bookstore.png',
		tech: ['Next.js', 'TypeScript', 'API'],
		github: 'https://github.com/luvtorn',
	},
	{
		title: 'Restaurant Website',
		description:
			'Modern website for a restaurant with menu and contact system.',
		image: '/projects/restaurant.png',
		tech: ['Next.js', 'Framer Motion'],
		demo: '#',
	},
]

const Projects = () => {
	return (
		<section
			id='projects'
			className='min-h-screen bg-black text-white py-20 px-6'
		>
			<div className='max-w-6xl mx-auto'>
				{/* Заголовок */}
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					className='text-4xl md:text-5xl font-bold mb-12 text-center'
				>
					My Projects
				</motion.h2>

				{/* Слайдер */}
				<Swiper
					modules={[Navigation]}
					spaceBetween={30}
					slidesPerView={1.2}
					navigation
				>
					{projects.map((project, index) => (
						<SwiperSlide key={index}>
							<motion.div
								whileHover={{ scale: 1.03 }}
								className='relative rounded-2xl overflow-hidden bg-gray-900 shadow-lg'
							>
								{/* Картинка */}
								<img
									src={project.image}
									alt={project.title}
									className='w-full h-[300px] object-cover'
								/>

								{/* Overlay */}
								<motion.div
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
									className='absolute inset-0 bg-black/80 flex flex-col justify-between p-6'
								>
									<div>
										<h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
										<p className='text-gray-300 text-sm'>
											{project.description}
										</p>
									</div>

									{/* Tech */}
									<div className='flex flex-wrap gap-2 mt-4'>
										{project.tech.map((tech, i) => (
											<span
												key={i}
												className='text-xs bg-white/10 px-2 py-1 rounded'
											>
												{tech}
											</span>
										))}
									</div>

									{/* Buttons */}
									<div className='flex gap-3 mt-4'>
										{project.github && (
											<a
												href={project.github}
												target='_blank'
												className='bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition'
											>
												GitHub
											</a>
										)}
										{project.demo && (
											<a
												href={project.demo}
												target='_blank'
												className='bg-primary text-black px-4 py-2 rounded-lg text-sm hover:bg-yellow-400 transition'
											>
												Live
											</a>
										)}
									</div>
								</motion.div>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Projects
