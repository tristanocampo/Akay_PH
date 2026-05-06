import { MdWarningAmber } from 'react-icons/md'
import AppButton from '../../../components/ui/AppButton'

function EmergencyBanner() {
  return (
    <article className="mt-6 rounded-3xl border border-(--danger-line) bg-(--danger-soft) p-3.5 sm:mt-8 sm:p-4 shadow-[0_4px_14px_rgba(232,74,74,0.08)]">
      <div className="flex items-start gap-2.5 sm:gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-(--danger-strong) shadow-sm sm:h-12 sm:w-12 sm:rounded-2xl">
          <MdWarningAmber className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
        </div>

        <div>
          <h2 className="text-[clamp(1.15rem,4.6vw,1.85rem)] font-extrabold text-(--danger-strong)">Emergency?</h2>
          <p className="mt-0.5 max-w-[20rem] text-[clamp(0.95rem,3.9vw,1.6rem)] leading-[1.35] text-(--danger-text)">
            Kung emergency, tumawag ng 911 o pumunta sa pinakamalapit na ospital.
          </p>
          <AppButton className="mt-2.5 sm:mt-3">Call Now</AppButton>
        </div>
      </div>
    </article>
  )
}

export default EmergencyBanner
