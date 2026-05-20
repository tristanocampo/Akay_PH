import { useState } from 'react'
import type { AssessmentConfig } from '../types/assessment'
import AssessmentCtaButton from './AssessmentCtaButton'
import AssessmentEmergencyBanner from './AssessmentEmergencyBanner'
import AssessmentHeader from './AssessmentHeader'
import AssessmentHero from './AssessmentHero'
import AssessmentQuestionCard from './AssessmentQuestionCard'

type AssessmentScreenProps = {
  assessment: AssessmentConfig
  onBack: () => void
}

function AssessmentScreen({ assessment, onBack }: AssessmentScreenProps) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>(() => {
    return assessment.questions.reduce<Record<string, string[]>>((accumulator, question) => {
      accumulator[question.id] = question.defaultSelectedOptionIds
      return accumulator
    }, {})
  })

  const updateSelection = (questionId: string, optionId: string) => {
    const question = assessment.questions.find((item) => item.id === questionId)
    if (!question) {
      return
    }

    setSelectedOptions((current) => {
      if (question.answerType === 'multiple') {
        const existing = current[questionId] ?? []
        const next = existing.includes(optionId)
          ? existing.filter((value) => value !== optionId)
          : [...existing, optionId]

        return {
          ...current,
          [questionId]: next,
        }
      }

      return {
        ...current,
        [questionId]: [optionId],
      }
    })
  }

  return (
    <main className="min-h-dvh bg-(--app-shell) text-(--ink-900)">
      <section className="mx-auto min-h-dvh max-w-[430px] border-x border-(--line) bg-(--app-bg) shadow-[0_8px_30px_rgba(21,27,39,0.07)]">
        <AssessmentHeader
          categoryTitleTagalog={assessment.categoryTitleTagalog}
          categorySubtitleEnglish={assessment.categorySubtitleEnglish}
          onBack={onBack}
        />

        <div className="space-y-8 px-4 pb-7 pt-6 sm:px-6 sm:pb-8 sm:pt-7">
          <AssessmentHero
            introTagalog={assessment.introTagalog}
            introEnglish={assessment.introEnglish}
            guidanceTagalog={assessment.guidanceTagalog}
            guidanceEnglish={assessment.guidanceEnglish}
          />

          <div className="space-y-8">
            {assessment.questions.map((question, index) => (
              <AssessmentQuestionCard
                key={question.id}
                question={question}
                questionNumber={index + 1}
                questionTotal={assessment.questions.length}
                selectedOptionIds={selectedOptions[question.id] ?? []}
                onSelectOption={updateSelection}
              />
            ))}
          </div>

          <AssessmentEmergencyBanner banner={assessment.emergencyBanner} />

          <AssessmentCtaButton />
        </div>
      </section>
    </main>
  )
}

export default AssessmentScreen
