import { motion } from 'framer-motion'
import type { CategoryItem } from '../types/home'

type CategoryCardProps = {
  item: CategoryItem
  onClick?: () => void
}

function CategoryCard({ item, onClick }: CategoryCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      // keep the subtle lift/press motion for all cards (visual feedback)
      whileHover={{ y: -5, scale: 1.015 }}
      whileTap={{ y: 1, scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28, mass: 0.7 }}
      className="flex h-full min-h-[10.5rem] w-full flex-col items-center rounded-3xl border border-(--card-line) bg-(--card-bg) px-2.5 pb-4 pt-4 text-center shadow-[0_10px_20px_rgba(90,110,145,0.08)] transition disabled:cursor-default sm:min-h-[11.5rem] sm:px-3 sm:pb-5 sm:pt-5"
    >
      <div className={`mx-auto grid h-11 w-11 place-items-center rounded-2xl sm:h-14 sm:w-14 ${item.iconBgClass} ${item.iconColorClass}`}>
        {item.icon}
      </div>
      <p className="mt-3.5 min-h-12 text-[clamp(1.1rem,4.8vw,2.1rem)] font-extrabold leading-[1.15] text-(--ink-900)">{item.title}</p>
      <p className="mt-0.5 text-[clamp(0.86rem,3.2vw,1.5rem)] font-medium leading-tight text-(--ink-500)">{item.subtitle}</p>
    </motion.button>
  )
}

export default CategoryCard
