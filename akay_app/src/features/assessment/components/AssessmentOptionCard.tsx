type AssessmentOptionCardProps = {
  labelTagalog: string
  labelEnglish: string
  selected: boolean
  onSelect: () => void
}

function AssessmentOptionCard({ labelTagalog, labelEnglish, selected, onSelect }: AssessmentOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`flex w-full items-center gap-4 rounded-3xl border px-4 py-4 text-left transition sm:gap-5 sm:px-5 sm:py-5 ${
        selected
          ? 'border-[#0E56D2] bg-[#F7FAFF] shadow-[0_8px_18px_rgba(14,86,210,0.08)]'
          : 'border-[#C8D0E4] bg-white hover:border-[#9DB4E7]'
      }`}
    >
      <span
        className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 sm:h-7 sm:w-7 ${
          selected ? 'border-[#0E56D2] bg-white' : 'border-[#B7C0D4] bg-white'
        }`}
        aria-hidden="true"
      >
        {selected ? <span className="h-3 w-3 rounded-full bg-[#0E56D2] sm:h-3.5 sm:w-3.5" /> : null}
      </span>

      <span className="min-w-0">
        <span className="block text-[clamp(1rem,4.1vw,1.18rem)] font-extrabold leading-snug text-(--ink-900)">{labelTagalog}</span>
        <span className="mt-0.5 block text-[clamp(0.9rem,3.4vw,1rem)] italic leading-snug text-(--ink-500)">{labelEnglish}</span>
      </span>
    </button>
  )
}

export default AssessmentOptionCard
