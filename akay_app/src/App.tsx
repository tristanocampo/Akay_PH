import { useState } from 'react'
import HomeScreen from './features/home/components/HomeScreen'
import AssessmentScreen from './features/assessment/components/AssessmentScreen'
import { coughAssessment } from './features/assessment/data/coughAssessment'

type AppScreen =
  | { name: 'home' }
  | { name: 'assessment'; categoryId: 'cough' }

function App() {
  const [screen, setScreen] = useState<AppScreen>({ name: 'home' })

  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === 'cough') {
      setScreen({ name: 'assessment', categoryId })
    }
  }

  if (screen.name === 'assessment') {
    return <AssessmentScreen assessment={coughAssessment} onBack={() => setScreen({ name: 'home' })} />
  }

  return <HomeScreen onCategorySelect={handleCategorySelect} />
}

export default App
