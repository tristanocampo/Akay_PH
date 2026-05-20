import type { AssessmentConfig } from '../types/assessment'

export const coughAssessment: AssessmentConfig = {
  categoryId: 'cough',
  categoryTitleTagalog: 'Lagnat / Ubo',
  categorySubtitleEnglish: 'Fever / Cough',
  introTagalog: 'Suriin natin ang iyong mga sintomas.',
  introEnglish: "Let's check your symptoms.",
  guidanceTagalog: 'Magsagot nang tapat para sa tamang payo medikal.',
  guidanceEnglish: 'Please answer honestly for accurate medical advice.',
  questions: [
    {
      id: 'symptoms',
      questionTagalog: 'Ano ang nararamdaman?',
      questionEnglish: 'What are the symptoms?',
      answerType: 'single',
      defaultSelectedOptionIds: ['fever'],
      options: [
        {
          id: 'fever',
          labelTagalog: 'Lagnat Lang',
          labelEnglish: 'Fever only',
        },
        {
          id: 'cough',
          labelTagalog: 'Ubo Lang',
          labelEnglish: 'Cough only',
        },
        {
          id: 'both',
          labelTagalog: 'Parehong Ubo at Lagnat',
          labelEnglish: 'Both fever and cough',
        },
      ],
    },
    {
      id: 'duration',
      questionTagalog: 'Ilang araw na?',
      questionEnglish: 'How many days',
      answerType: 'single',
      defaultSelectedOptionIds: ['seven-plus'],
      options: [
        {
          id: 'one-two',
          labelTagalog: '1 - 2 Araw',
          labelEnglish: '1 - 2 days only',
        },
        {
          id: 'three-six',
          labelTagalog: '3 - 6 Araw',
          labelEnglish: '3 - 6 days only',
        },
        {
          id: 'seven-plus',
          labelTagalog: '7 na araw o higit pa',
          labelEnglish: '7 days or more',
        },
      ],
    },
    {
      id: 'warning-symptoms',
      questionTagalog: 'Mayroon ba sa mga ito ngayon?',
      questionEnglish: 'Do you have any of these now?',
      answerType: 'single',
      defaultSelectedOptionIds: ['none'],
      options: [
        {
          id: 'breathing',
          labelTagalog: 'Hirap huminga',
          labelEnglish: 'Difficulty breathing',
        },
        {
          id: 'phlegm-blood',
          labelTagalog: 'May dugo sa plema',
          labelEnglish: 'Blood in phlegm',
        },
        {
          id: 'none',
          labelTagalog: 'Wala sa nabanggit',
          labelEnglish: 'None of the above',
        },
      ],
    },
  ],
  emergencyBanner: {
    labelTagalog: 'MAHALAGA',
    labelEnglish: 'Important',
    bodyTagalog: 'Kung nahihirapan kang huminga o may dugo sa plema ngayon, tumawag agad ng 911.',
  },
}
