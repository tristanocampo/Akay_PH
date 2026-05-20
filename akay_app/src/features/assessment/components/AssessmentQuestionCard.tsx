import type { AssessmentQuestion } from '../types/assessment'
import AssessmentOptionCard from './AssessmentOptionCard'

type AssessmentQuestionCardProps = {
  question: AssessmentQuestion
  questionNumber: number
  questionTotal: number
  selectedOptionIds: string[]
  onSelectOption: (questionId: string, optionId: string) => void
}

function AssessmentQuestionCard({
  question,
  questionNumber,
  questionTotal,
  selectedOptionIds,
  onSelectOption,
}: AssessmentQuestionCardProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <p className="text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-[var(--brand-blue)]">
          Tanong {questionNumber} ng {questionTotal}
        </p>
        <p className="text-[clamp(1.35rem,5.8vw,1.7rem)] font-extrabold leading-tight text-(--ink-900)">{question.questionTagalog}</p>
        <p className="text-[clamp(0.9rem,3.7vw,1.05rem)] italic text-(--ink-500)">{question.questionEnglish}</p>
      </div>

      <div className="space-y-3.5 sm:space-y-4">
        {question.options.map((option) => {
          const selected = selectedOptionIds.includes(option.id)
          return (
            <AssessmentOptionCard
              key={option.id}
              labelTagalog={option.labelTagalog}
              labelEnglish={option.labelEnglish}
              selected={selected}
              onSelect={() => onSelectOption(question.id, option.id)}
            />
          )
        })}
      </div>
    </section>
  )
}

export default AssessmentQuestionCard
