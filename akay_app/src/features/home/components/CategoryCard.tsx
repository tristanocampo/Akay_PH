import type { CategoryItem } from '../types/home'

type CategoryCardProps = {
  item: CategoryItem
}

function CategoryCard({ item }: CategoryCardProps) {
  return (
    <article className="rounded-3xl border border-(--card-line) bg-(--card-bg) px-2.5 pb-4.5 pt-4 text-center shadow-[0_10px_20px_rgba(90,110,145,0.08)] sm:px-3 sm:pb-5 sm:pt-5">
      <div className={`mx-auto grid h-11 w-11 place-items-center rounded-2xl sm:h-14 sm:w-14 ${item.iconBgClass} ${item.iconColorClass}`}>{item.icon}</div>
      <p className="mt-3.5 min-h-12 text-[clamp(1.1rem,4.8vw,2.1rem)] font-extrabold leading-[1.15] text-(--ink-900)">{item.title}</p>
      <p className="mt-0.2 text-[clamp(0.86rem,3.2vw,1.5rem)] font-medium leading-tight text-(--ink-500)">{item.subtitle}</p>
    </article>
  )
}

export default CategoryCard
