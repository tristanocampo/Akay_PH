import { MdArrowForward } from 'react-icons/md'
import AppButton from '../../../components/ui/AppButton'

type AssessmentCtaButtonProps = {
  onClick?: () => void
}

function AssessmentCtaButton({ onClick }: AssessmentCtaButtonProps) {
  return (
    <AppButton
      onClick={onClick}
      style={{ backgroundColor: 'var(--brand-blue)' }}
      className="relative flex w-full items-center justify-center px-6 py-4 text-[clamp(1rem,4vw,1.15rem)] shadow-[0_16px_28px_rgba(14,86,210,0.22)] hover:brightness-95"
    >
      <span className="text-center">Ipakita ang Resulta</span>
      <MdArrowForward className="h-5 w-5 shrink-0 absolute right-4 top-1/2 -translate-y-1/2" aria-hidden="true" />
    </AppButton>
  )
}

export default AssessmentCtaButton
