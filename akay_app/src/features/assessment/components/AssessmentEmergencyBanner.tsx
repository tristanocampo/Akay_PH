import { MdWarningAmber } from 'react-icons/md'
import type { AssessmentBanner } from '../types/assessment'

type AssessmentEmergencyBannerProps = {
  banner: AssessmentBanner
}

function AssessmentEmergencyBanner({ banner }: AssessmentEmergencyBannerProps) {
  return (
    <aside className="rounded-[28px] border border-[#F2C9C4] bg-[#FFF4EC] px-4 py-4 shadow-[0_4px_18px_rgba(226,122,35,0.06)] sm:px-5 sm:py-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#E45A18] shadow-sm">
          <MdWarningAmber className="h-6 w-6" aria-hidden="true" />
        </div>

        <div className="min-w-0">
          <p className="text-[0.92rem] font-extrabold uppercase tracking-[0.14em] text-[#B61B14] sm:text-[1rem]">
            {banner.labelTagalog}
          </p>
          <p className="mt-0.5 text-[0.78rem] font-medium text-(--ink-500) sm:text-sm">{banner.labelEnglish}</p>
          <p className="mt-2 max-w-[20rem] text-[clamp(0.95rem,3.7vw,1.05rem)] leading-[1.5] text-[#C0392B]">
            {banner.bodyTagalog}
          </p>
        </div>
      </div>
    </aside>
  )
}

export default AssessmentEmergencyBanner
