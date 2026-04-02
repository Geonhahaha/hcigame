import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const MEMORY_ORBS = [
  {
    id: 'clock-tower',
    label: '시계탑 단서',
    x: 18,
    y: 22,
    spread: '시계탑 그림자 분석',
    headline: '04:17에 멈춘 시계는 사건 시간이 아니다.',
    dek: '그림자 방향과 분침 잔흔이 맞지 않는다. 누군가 의도적으로 시계를 조작했다.',
    sections: [
      {
        title: 'Visual Breakdown',
        body: '다이얼 유리면에 남은 미세 균열은 외부 충격이 아닌 내부 압력으로 발생했다. 시침은 4시를 가리키지만, 분침 축 하단의 금속가루 분포는 1시대의 회전을 마지막으로 보여준다.',
      },
      {
        title: 'Hypothesis',
        body: '사건 후 타임라인을 왜곡하기 위해 시곗바늘이 수동으로 재배치되었다. 범인은 구조물 접근이 가능한 내부 동선을 알고 있었다.',
      },
    ],
  },
  {
    id: 'wine-glass',
    label: '와인잔 단서',
    x: 62,
    y: 31,
    spread: '파편 패턴 기록',
    headline: '와인잔은 떨어진 것이 아니라 밀려났다.',
    dek: '파편 방사 각도는 테이블 끝 방향으로 비정상적으로 길다. 손목 스냅이 개입된 흔적이다.',
    sections: [
      {
        title: 'Material Trace',
        body: '유리 단면의 미세 스크래치에서 금속성 코팅 입자가 검출되었다. 피의자가 착용한 반지 표면 성분과 동일한 니켈-크롬 계열이다.',
      },
      {
        title: 'Narrative Shift',
        body: '"실수로 부딪혔다"는 진술과 달리, 파편의 72%가 동일 축으로 쏠려 있다. 반사적으로 밀친 동작이 더 설득력 있다.',
      },
    ],
  },
  {
    id: 'door-handle',
    label: '문고리 단서',
    x: 79,
    y: 64,
    spread: '출입 기록 리포트',
    headline: '문은 안에서 잠겼지만, 마지막 접촉자는 밖에 있었다.',
    dek: '문고리 하단의 지문 위치가 비정상적으로 낮다. 바깥에서 고의로 흔들어 잠금 상태를 확인한 패턴이다.',
    sections: [
      {
        title: 'Touch Geometry',
        body: '지문은 위에서 잡는 일반 그립이 아니라, 손끝으로 아래를 받쳐 올리는 형태로 남았다. 급히 닫힌 직후 상태를 체크할 때 흔한 동작이다.',
      },
      {
        title: 'Case Note',
        body: '이 단서가 맞다면 밀실은 연출된 결과다. 핵심은 "누가 안에 있었는가"가 아니라 "누가 잠금 연출을 확인했는가"다.',
      },
    ],
  },
]

function MainPage() {
  const [collectedOrbIds, setCollectedOrbIds] = useState([])
  const [activeOrbId, setActiveOrbId] = useState(null)

  const activeOrb = useMemo(
    () => MEMORY_ORBS.find((orb) => orb.id === activeOrbId) ?? null,
    [activeOrbId],
  )

  const collectedCount = collectedOrbIds.length

  const openMemoryOrb = (orbId) => {
    setCollectedOrbIds((prev) => (prev.includes(orbId) ? prev : [...prev, orbId]))
    setActiveOrbId(orbId)
  }

  return (
    <main className="case-file">
      <header className="status-bar">
        <div>
          <p className="eyebrow">Design Diary: Scene 01</p>
          <h1>적막한 응접실의 기억 구슬</h1>
        </div>
        <p className="progress" aria-live="polite">
          수집한 구슬 <strong>{collectedCount}</strong> / {MEMORY_ORBS.length}
        </p>
      </header>

      <section className="scene-wrapper" aria-label="사건 현장">
        {MEMORY_ORBS.map((orb, index) => {
          const isCollected = collectedOrbIds.includes(orb.id)

          return (
            <motion.button
              key={orb.id}
              type="button"
              className={`memory-orb ${isCollected ? 'is-collected' : ''}`}
              style={{ left: `${orb.x}%`, top: `${orb.y}%` }}
              onClick={() => openMemoryOrb(orb.id)}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.12, duration: 0.35 }}
              whileHover={{ scale: 1.18 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`${orb.label} 열기`}
            >
              <span className="orb-core" />
            </motion.button>
          )
        })}
      </section>

      <AnimatePresence>
        {activeOrb && (
          <motion.section
            className="memory-overlay"
            key={activeOrb.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setActiveOrbId(null)}
          >
            <motion.article
              className="magazine-layout"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 28, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="spread-tag">{activeOrb.spread}</div>
              <h2>{activeOrb.headline}</h2>
              <p className="dek">{activeOrb.dek}</p>

              {activeOrb.sections.map((section) => (
                <section key={section.title} className="analysis-block">
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                </section>
              ))}

              <button
                type="button"
                className="close-button"
                onClick={() => setActiveOrbId(null)}
              >
                현장으로 돌아가기
              </button>
            </motion.article>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  )
}

export default MainPage
