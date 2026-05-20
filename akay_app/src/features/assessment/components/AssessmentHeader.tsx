import { IoChevronBack } from 'react-icons/io5'
import { MdWarningAmber } from 'react-icons/md'

type AssessmentHeaderProps = {
  categoryTitleTagalog: string
  categorySubtitleEnglish: string
  onBack: () => void
}

function AssessmentHeader({ categoryTitleTagalog, categorySubtitleEnglish, onBack }: AssessmentHeaderProps) {
  return (
    <header className="flex items-start justify-between border-b border-(--line) bg-white px-4 py-4 sm:px-6">
      <button
        type="button"
        onClick={onBack}
        className="flex items-start gap-2 rounded-full pr-2 text-left text-(--ink-900) transition hover:bg-slate-50"
        aria-label="Go back"
      >
        <IoChevronBack className="mt-0.5 h-5 w-5 shrink-0 text-(--brand-blue)" aria-hidden="true" />
        <span>
          <span className="block text-[clamp(1rem,4vw,1.2rem)] font-extrabold leading-none">{categoryTitleTagalog}</span>
          <span className="mt-0.5 block text-[0.72rem] font-medium text-(--ink-500) sm:text-sm">{categorySubtitleEnglish}</span>
        </span>
      </button>

      <MdWarningAmber className="mt-0.5 h-7 w-7 shrink-0 text-[#E21B1B]" aria-hidden="true" />
    </header>
  )
}

export default AssessmentHeader
