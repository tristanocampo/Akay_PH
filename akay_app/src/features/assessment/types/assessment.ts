export type AssessmentOption = {
  id: string
  labelTagalog: string
  labelEnglish: string
}

export type AssessmentQuestion = {
  id: string
  questionTagalog: string
  questionEnglish: string
  answerType: 'single' | 'multiple'
  defaultSelectedOptionIds: string[]
  options: AssessmentOption[]
}

export type AssessmentBanner = {
  labelTagalog: string
  labelEnglish: string
  bodyTagalog: string
}

export type AssessmentConfig = {
  categoryId: string
  categoryTitleTagalog: string
  categorySubtitleEnglish: string
  introTagalog: string
  introEnglish: string
  guidanceTagalog: string
  guidanceEnglish: string
  questions: AssessmentQuestion[]
  emergencyBanner: AssessmentBanner
}
