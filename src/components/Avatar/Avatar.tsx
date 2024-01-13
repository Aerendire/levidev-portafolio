import { fadeIn } from '@/utils/motionTransition'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Avatar() {
    return (
        <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hiddel"
            animate="show"
            exit="hidden"
            className='bottom-0 right-0 hidden md:inline-block md:absolute'>
            <Image
                src="/assets/avatar-1.png" 
                width="350" 
                height="350"
                className="w-full h-full" 
                alt="Particles"/>

        </motion.div>
    )
}