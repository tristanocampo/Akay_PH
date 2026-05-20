import CategoryCard from './CategoryCard'
import EmergencyBanner from './EmergencyBanner'
import AppTopBar from './AppTopBar'
import { categories } from '../data/categories'

type HomeScreenProps = {
  onCategorySelect: (categoryId: string) => void
}

function HomeScreen({ onCategorySelect }: HomeScreenProps) {
  return (
    <main className="min-h-screen bg-(--app-shell) px-0 py-0 text-(--ink-900)">
      <section className="mx-auto min-h-dvh max-w-[430px] overflow-hidden border-x border-(--line) bg-(--app-bg) shadow-[0_8px_30px_rgba(21,27,39,0.07)]">
        <AppTopBar />

        <div className="px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8">
          <h1 className="text-[clamp(2rem,8.8vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-(--ink-900)">Maganang Umaga!</h1>
          <p className="mt-1.5 text-[clamp(1.2rem,5.2vw,2.15rem)] font-medium text-(--ink-500)">Kamusta ang iyong pakiramdam?</p>

          <EmergencyBanner />

          <h3 className="mt-8 text-[clamp(1.9rem,7.8vw,3rem)] font-extrabold tracking-[-0.01em] text-(--ink-900)">Categories</h3>

          <ul className="mt-4 grid grid-cols-2 items-stretch gap-3.5 sm:mt-5 sm:gap-4">
            {categories.map((item) => (
              <li key={item.id} className="h-full">
                <CategoryCard item={item} onClick={item.id === 'cough' ? () => onCategorySelect(item.id) : undefined} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default HomeScreen
