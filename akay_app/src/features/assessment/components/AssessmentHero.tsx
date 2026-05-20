type AssessmentHeroProps = {
  introTagalog: string
  introEnglish: string
  guidanceTagalog: string
  guidanceEnglish: string
}

function AssessmentHero({ introTagalog, introEnglish, guidanceTagalog, guidanceEnglish }: AssessmentHeroProps) {
  return (
    <section className="space-y-3">
      <div className="space-y-2">
        <h1 className="max-w-none text-[clamp(1.95rem,8vw,3.1rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-(--ink-900) text-balance">
          {introTagalog}
        </h1>
        <p className="text-[clamp(0.95rem,4vw,1.18rem)] leading-[1.5] text-(--ink-500)">{introEnglish}</p>
      </div>

      <p className="max-w-none text-[clamp(0.95rem,3.7vw,1.08rem)] leading-[1.55] text-(--ink-500)">
        {guidanceTagalog} ({guidanceEnglish})
      </p>
    </section>
  )
}

export default AssessmentHero
