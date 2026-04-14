import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import app11Image from '../assets/app1_1.png'
import app12Image from '../assets/app1_2.png'
import app13Image from '../assets/app1_3.png'
import app14Image from '../assets/app1_4.png'
import app15Image from '../assets/app1_5.png'
import app16Image from '../assets/app1_6.png'
import app17Image from '../assets/app1_7.png'
import app18Image from '../assets/app1_8.png'
import app21Image from '../assets/app2_1.png'
import app22Image from '../assets/app2_2.png'
import app23Image from '../assets/app2_3.png'
import app24Image from '../assets/app2_4.jpg'
import app25Image from '../assets/app2_5.png.webp'
import app26Image from '../assets/app2_6JPG.JPG'
import app27Image from '../assets/app2_7.png'
import applePhotosIcon from '../assets/apple photos.png'
import youtubeMusicIcon from '../assets/youtube music.png'
import googleMapsIcon from '../assets/google maps.png'
import instagramIcon from '../assets/instagram.png'
import nikeIcon from '../assets/nike.png'

const BOOK_ICON_BY_ID = {
  'book-1': applePhotosIcon,
  'book-2': youtubeMusicIcon,
  'book-3': googleMapsIcon,
  'book-4': instagramIcon,
  'book-5': nikeIcon,
}

const TARGET_BOOKS = [
  {
    id: 'book-1',
    slotId: 't2',
    title: 'Apple Photos - Memories',
    pages: [
      {
        title: 'The Gateway to Past',
        content:
          "'Memories' feature of the Apple Photos app is placed at the very top of the app's Collections tab, providing very high visibility and discoverability. The 'Dynamic Previews' that users encounter as soon as they open the app display fragments of the past in a slideshow format even before clicking, strongly encouraging (affording) entry into memories we had forgotten.",
        imageSrc: app11Image,
        imageAlt: 'Apple Photos Memories dynamic preview screen',
        imageCaption:
          'The appearance of Collections tab. Memories menu is located at the very top.',
      },
      {
        title: 'The Logic of Black Box',
        content:
          'The more you look into memories, the more opaque the logic becomes. The system exhibits an opaque hierarchy whose criteria for prioritizing certain memories are unknown. While some trips are grouped broadly, some days are fragmented. This inconsistent data grouping hinders users from forming a mental model of the system\'s sorting criteria and causes cognitive confusion.',
        images: [
          {
            src: app12Image,
            alt: 'Apple Photos European trip grouping',
          },
          {
            src: app13Image,
            alt: 'Apple Photos Japan trip fragmentation',
          },
        ],
        imageCaption:
          'The long European trip from March 1 to 9, 2025, was combined with Germany and Austria, but the Japan trip from June 29 to July 3, 2025, was divided into separate days such as Osaka City on June 29, 2025, and Kyoto City on July 3, 2025.',
      },
      {
        title: 'Lost in Semantics',
        content:
          'GPS and facial recognition metadata-based naming methods show vulnerabilities. While specific locations are designated with precise place names, other data of similar nature are treated with ambiguous common nouns. The absence of such naming rules undermines the system\'s consistency and, consequently, negatively impacts the system reliability, which is the user\'s trust in the system\'s intelligence. Additionally, categories like "Memories Together (2023~2024)" lack clear generation rules. It is unclear why only 29 photos out of numerous military service period portraits were selected, making the conceptual model provided by the system to the user ambiguous.',
        images: [
          {
            src: app14Image,
            alt: 'Apple Photos metadata-based naming inconsistency example 1',
          },
          {
            src: app15Image,
            alt: 'Apple Photos metadata-based naming inconsistency example 2',
          },
        ],
        imageCaption:
          'One album is titled specifically as "Grand Canyon Exploration," while another from Pokhara, Nepal is vaguely titled "Exploration," failing to utilize available location data for the title.',
      },
      {
        title: 'Interaction & Aesthetic Trade-offs',
        content:
          'The memory playback interface supports both portrait and landscape modes, providing a fullscreen immersive experience synchronized with background music. However, the system forms a trade-off relationship between information integrity and aesthetic consistency to maximize this aesthetic consistency. To enforce a 16:9 fullscreen aspect ratio, the system arbitrarily crops photos and videos that do not match this ratio. While the automatic direction synchronized with the music and tempo may enhance visual satisfaction, it causes side effects such as the loss of key subjects or compositional details within the photos.',
        images: [
          {
            src: app16Image,
            alt: 'Original photo before memory playback crop',
          },
          {
            src: app17Image,
            alt: 'Cropped photo shown in memory playback slideshow',
          },
        ],
        imageCaption:
          'Original photo (left) and actual capture of the cropped photo in the memory playback slideshow (right)',
      },
      {
        title: 'The Limits of Intelligent Systems',
        content:
          "While Natural Language Processing (NLP) via Siri accurately handles spatio-temporal queries like 'Last Summer' or 'Outing in D.C.,' it reveals critical logical flaws in complex contextual understanding. For instance, a prompt of 'Dining' often suffers from contextual misunderstanding, including portrait-heavy photos simply because food is present in the background. Most notably, the system's negation failure-such as returning only 2024 content when explicitly asked to 'exclude 2024'-represents a significant breakdown in user intent matching.",
        imageSrc: app18Image,
        imageAlt: 'Korean version memory video creation feature interface',
        imageCaption: 'Korean Version Memory Video Creation Feature Interface',
      },
    ],
  },
  {
    id: 'book-2',
    slotId: 't5',
    title: 'YouTube Music - Recap',
    pages: [
      {
        title: 'Discoverability & Contextual Guidance',
        content:
          'The Recap feature of YouTube Music exhibits characteristics of hidden affordance in its interface design. Although the feature exists, it is deeply nested under the profile menu, lacking sufficient visual signifiers for users to discover it. As a result, its discoverability is significantly reduced during regular use. To address this, the system employs just-in-time prompts in the form of pop-ups at specific times, such as the end of the year or the end of a season. This acts as a context-based UI strategy that compensates for low visibility and encourages user engagement.',
        images: [
          {
            src: app21Image,
            alt: 'YouTube Music recap hidden inside profile menu',
            caption:
              'The recap feature is placed deep within the profile menu, resulting in significantly low discoverability until users explicitly navigate to it.',
          },
          {
            src: app22Image,
            alt: 'YouTube Music recap seasonal banner prompt',
            caption:
              'To compensate for the usual low discoverability, a context-based UI strategy is employed by displaying a banner at the top of the home screen during specific seasons, instantly making the hidden feature visible and encouraging user engagement.',
          },
        ],
      },
      {
        title: 'Volatility of Digital Memories',
        content:
          "Unlike other services that preserve records going back several years to provide users with a chronological collection of memories, YouTube Music's Recap has a short retention period measured in years. In particular, as of April 2026, it was observed that with the appearance of the latest Recap, past records are replaced and disappear, which is disappointing in terms of data continuity. This does not fully meet the system reliability model of users who expect continuous records as a digital archive and becomes a factor that limits long-term data utilization.",
        imageSrc: app23Image,
        imageAlt: 'YouTube Music recap retention and replacement behavior',
        imageCaption:
          'Recap main screen. Unlike just a month ago when it was possible to access the full 2025 recap and the 2025 recap from September to November, currently only the recap from December to February is accessible.',
      },
      {
        title: 'Interaction Psychology & Information Flow',
        content: [
          'YouTube Music Recap enhances the user experience through gamification and thoughtful interaction design. By showing insights like a “Top 2% Listener” label for a particular artist, the system reinforces the user\'s sense of relatedness by linking them to others, while also driving the need for competence to reach even higher ranks-creating a strong incentive to share with friends.',
          'At the same time, while the automated story format offers a seamless flow, the high information density relative to short dwell times can increase cognitive load. To help with this, the system includes an “escape hatch” via the “long-press to pause” gesture, giving users the level of control they need. In addition, by combining album artwork with track titles on screen, the design promotes recognition rather than recall, which reduces the mental effort required.',
          'However, there\'s still a clear lack of granularity compared to its simple UI. Beyond telling users what they listened to, the lack of deeper contextual feedback-such as when their peak listening occurred-makes it harder for the system to build a more detailed narrative of the user\'s “musical journey.”',
        ],
        images: [
          {
            src: app24Image,
            alt: 'YouTube Music recap screen showing top 5 genres',
            caption:
              "One of the recap screenshots. it shows the user's top 5 music genres they have listened to. The user can save this information to their device or share it with others.",
          },
          {
            src: app25Image,
            alt: 'YouTube Music recap top listener percentage for an artist',
            caption:
              'A photo showing the percentage of top listeners a user is for a specific artist during a recap.',
          },
        ],
      },
      {
        title: 'Multimodal Association',
        content: [
          'YouTube Music attempts to advance multimodal interaction by integrating with Google Photos to create "music photo albums," combining auditory and visual memories. However, the heuristics of the system that matches specific photos to specific songs remain opaque, often causing frequent conceptual mismatches. For example, placing a static sunset photo alongside an energetic girl group track results in a clash between the auditory affordance of the music and the visual tone.',
          'To compensate for the limitations of this automation, the provided "photo change (Random Shuffle)" feature functions as a mechanism that guarantees minimal user control. However, since it is not a precise manual control tool that allows users to directly select specific photos they want, there are functional constraints that prevent full intervention in the memory reconstruction proposed by the system.',
        ],
        imageSrc: app26Image,
        imageAlt: 'YouTube Music music photo album with mismatched visual tone',
        imageCaption:
          "An actual music photo album. It combines three photos with bright and a refreshing pop dance girl group song. If you ask whether the photos match the mood of the song, well, I'm not sure.",
      },
      {
        title: 'Linguistic Inequality in AI Interaction',
        content:
          "The YouTube Music system reveals a serious availability issue in terms of accessibility by determining the provision of core interaction tools based on the user's language settings. In the English setting environment, it offers an interactive interface that allows users to actively explore their music data through the 'Ask about Recap' feature linked with Gemini AI. However, in other language settings, including Korean, such AI-based analytical tools are completely excluded, providing only a simple static list of results.",
        images: [
          {
            src: app23Image,
            alt: 'YouTube Music English recap with Ask about Recap AI feature',
          },
          {
            src: app27Image,
            alt: 'YouTube Music Korean recap without AI ask feature',
          },
        ],
        imageCaption:
          'In the English version(left), there is a feature under the recap that allows users to ask the AI about their listening history, but in the Korean version(right), that feature is missing, and it goes directly from the recap to the music photo album.',
      },
    ],
  },
  {
    id: 'book-3',
    slotId: 't8',
    title: 'Google Maps - Timeline',
    pages: [
      'Page 1. 계단 발자국 간격 분석. 오르막보다 내리막에서 흔적 간격이 넓어졌다.',
      'Page 2. 난간 손자국의 높이가 일정치 않다. 두 명 이상 이동했을 가능성이 있다.',
      'Page 3. 먼지 분포는 중간 층에서만 비어 있다. 특정 층을 우회한 동선이 존재한다.',
      'Page 4. 페이지 하단 메모: "한 명은 시선을 끌고, 다른 한 명은 문서를 옮겼다".',
      'Page 5. 봉인된 쪽지 대신 구슬이 보인다. 눌러 수집하고 기록을 해제한다.',
    ],
  },
  {
    id: 'book-4',
    slotId: 'b3',
    title: 'Instagram - Archive',
    pages: [
      'Page 1. 조명 점등 기록의 누락 구간이 확인된다. 야간 로그가 비정상적으로 짧다.',
      'Page 2. 전구 교체 이력이 없는데도 밝기 지표가 크게 변했다. 인위적 차광 가능성.',
      'Page 3. 반사면 각도 측정치가 벽면 도면과 다르다. 임시 설치물이 있었을 수 있다.',
      'Page 4. 기록자는 "빛을 끄지 않고 어둡게 만드는 법"을 언급했다.',
      'Page 5. 마지막 줄 옆에 빛나는 구슬이 맺혀 있다. 눌러 수집한다.',
    ],
  },
  {
    id: 'book-5',
    slotId: 'b7',
    title: 'Nike Run Club - Activity',
    pages: [
      'Page 1. 인물 목록의 번호 체계가 사건 이후 다시 매겨졌다. 삭제된 인덱스가 보인다.',
      'Page 2. 대조표의 공백 칸이 두 곳 남아 있다. 아직 찾지 못한 연결고리로 추정된다.',
      'Page 3. 참고문헌에 동일 제목이 다른 출판사로 두 번 기록되어 있다.',
      'Page 4. 마지막 전 메모: "답은 책 안이 아니라 책과 책 사이".',
      'Page 5. 수집 가능한 핵심 구슬이 마지막 인덱스에 고정되어 있다. 눌러 확보한다.',
    ],
  },
]

const SHELF_SLOTS = [
  { id: 't1', shelf: 'top', h: 144, tone: 'tone-1' },
  { id: 't2', shelf: 'top', h: 150, tone: 'tone-2' },
  { id: 't3', shelf: 'top', h: 138, tone: 'tone-3' },
  { id: 't4', shelf: 'top', h: 146, tone: 'tone-4' },
  { id: 't5', shelf: 'top', h: 152, tone: 'tone-5' },
  { id: 't6', shelf: 'top', h: 140, tone: 'tone-2' },
  { id: 't7', shelf: 'top', h: 148, tone: 'tone-1' },
  { id: 't8', shelf: 'top', h: 144, tone: 'tone-3' },
  { id: 't9', shelf: 'top', h: 154, tone: 'tone-4' },
  { id: 't10', shelf: 'top', h: 142, tone: 'tone-5' },
  { id: 'b1', shelf: 'bottom', h: 152, tone: 'tone-3' },
  { id: 'b2', shelf: 'bottom', h: 146, tone: 'tone-1' },
  { id: 'b3', shelf: 'bottom', h: 150, tone: 'tone-4' },
  { id: 'b4', shelf: 'bottom', h: 141, tone: 'tone-5' },
  { id: 'b5', shelf: 'bottom', h: 154, tone: 'tone-2' },
  { id: 'b6', shelf: 'bottom', h: 145, tone: 'tone-3' },
  { id: 'b7', shelf: 'bottom', h: 151, tone: 'tone-4' },
  { id: 'b8', shelf: 'bottom', h: 143, tone: 'tone-1' },
  { id: 'b9', shelf: 'bottom', h: 152, tone: 'tone-5' },
  { id: 'b10', shelf: 'bottom', h: 146, tone: 'tone-2' },
]

function MainPage({ onRestart }) {
  const [collectedOrbIds, setCollectedOrbIds] = useState([])
  const [activeBookId, setActiveBookId] = useState(null)
  const [activePage, setActivePage] = useState(0)
  const [scene, setScene] = useState('library')
  const [doorPopup, setDoorPopup] = useState(null)
  const [keyObtained, setKeyObtained] = useState(false)
  const [passwordPopup, setPasswordPopup] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordMessage, setPasswordMessage] = useState(null)

  const targetBySlot = useMemo(
    () =>
      TARGET_BOOKS.reduce((acc, book) => {
        acc[book.slotId] = book
        return acc
      }, {}),
    [],
  )

  const topSlots = useMemo(
    () => SHELF_SLOTS.filter((slot) => slot.shelf === 'top'),
    [],
  )

  const bottomSlots = useMemo(
    () => SHELF_SLOTS.filter((slot) => slot.shelf === 'bottom'),
    [],
  )

  const activeBook = useMemo(
    () => TARGET_BOOKS.find((book) => book.id === activeBookId) ?? null,
    [activeBookId],
  )

  const activePageData = activeBook ? activeBook.pages[activePage] : null
  const activeBookIcon = activeBook ? BOOK_ICON_BY_ID[activeBook.id] : null

  const collectedCount = collectedOrbIds.length
  const totalBooks = TARGET_BOOKS.length
  const isLastPage = activePage === 4
  const isActiveOrbCollected = activeBook
    ? collectedOrbIds.includes(activeBook.id)
    : false

  const openBook = (bookId) => {
    setActiveBookId(bookId)
    setActivePage(0)
  }

  const closeBook = () => {
    setActiveBookId(null)
    setActivePage(0)
  }

  const goToPage = (pageNum) => {
    setActivePage(pageNum)
    setTimeout(() => {
      const bookPopup = document.querySelector('.book-popup')
      if (bookPopup) {
        bookPopup.scrollTop = 0
      }
    }, 0)
  }

  const collectOrb = () => {
    if (!activeBook) {
      return
    }

    setCollectedOrbIds((prev) =>
      prev.includes(activeBook.id) ? prev : [...prev, activeBook.id],
    )
  }

  const handlePasswordSubmit = () => {
    if (passwordInput === '0000') {
      setPasswordMessage('success')
      setKeyObtained(true)
      setPasswordInput('')
      setTimeout(() => {
        setPasswordPopup(false)
        setPasswordMessage(null)
      }, 2000)
    } else {
      setPasswordMessage('error')
      setPasswordInput('')
      setTimeout(() => {
        setPasswordMessage(null)
      }, 2000)
    }
  }

  const sceneTitle =
    scene === 'library'
      ? '빛나는 책에서 기억 구슬 회수하기'
      : scene === 'exit-door'
        ? '열쇠 구멍이 있는 출구 문'
        : '통제 구역으로 연결되는 문'

  const goToScene = (nextScene) => {
    setScene(nextScene)
    closeBook()
  }

  return (
    <main className="case-file">
      <header className="status-bar">
        <div>
          <p className="eyebrow">Design Diary: Library Wing</p>
          <h1>{sceneTitle}</h1>
        </div>
        <div className="progress-info" aria-live="polite">
          <p className="progress">
            수집한 구슬 <strong>{collectedCount}</strong> / {totalBooks}
          </p>
          {keyObtained && (
            <p className="progress key-status">
              🔑 <strong>KEY OBTAINED</strong>
            </p>
          )}
        </div>
      </header>

      {scene === 'library' && (
        <section className="bookshelf-scene" aria-label="도서관 책장">
          <button
            type="button"
            className="scene-nav-button left"
            onClick={() => goToScene('exit-door')}
            aria-label="Exit 문 화면으로 이동"
          >
            ←
          </button>

          <button
            type="button"
            className="scene-nav-button right"
            onClick={() => goToScene('control-room-door')}
            aria-label="Control Room 문 화면으로 이동"
          >
            →
          </button>

          <div className="book-row top-row">
            {topSlots.map((slot, index) => {
              const targetBook = targetBySlot[slot.id]

              if (!targetBook) {
                return (
                  <div
                    key={slot.id}
                    className={`bookshelf-book ${slot.tone}`}
                    style={{ '--book-height': `${slot.h}px` }}
                    aria-hidden="true"
                  >
                    <span className="book-spine">Volume {index + 1}</span>
                  </div>
                )
              }

              const isCollected = collectedOrbIds.includes(targetBook.id)

              return (
                <motion.button
                  key={slot.id}
                  type="button"
                  className={`bookshelf-book is-target ${slot.tone} ${isCollected ? 'is-collected' : ''}`}
                  style={{ '--book-height': `${slot.h}px` }}
                  onClick={() => openBook(targetBook.id)}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.35 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`${targetBook.title} 열기`}
                >
                  <span className="book-spine">{targetBook.title}</span>
                </motion.button>
              )
            })}
          </div>

          <div className="book-row bottom-row">
            {bottomSlots.map((slot, index) => {
              const targetBook = targetBySlot[slot.id]

              if (!targetBook) {
                return (
                  <div
                    key={slot.id}
                    className={`bookshelf-book ${slot.tone}`}
                    style={{ '--book-height': `${slot.h}px` }}
                    aria-hidden="true"
                  >
                    <span className="book-spine">Volume {topSlots.length + index + 1}</span>
                  </div>
                )
              }

              const isCollected = collectedOrbIds.includes(targetBook.id)

              return (
                <motion.button
                  key={slot.id}
                  type="button"
                  className={`bookshelf-book is-target ${slot.tone} ${isCollected ? 'is-collected' : ''}`}
                  style={{ '--book-height': `${slot.h}px` }}
                  onClick={() => openBook(targetBook.id)}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 + 0.15, duration: 0.35 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`${targetBook.title} 열기`}
                >
                  <span className="book-spine">{targetBook.title}</span>
                </motion.button>
              )
            })}
          </div>

        </section>
      )}

      {scene === 'exit-door' && (
        <section className="door-scene" aria-label="Exit 문 화면">
          <p className="door-top-label">Exit</p>
          <button
            type="button"
            className="single-door keyhole-door door-interactive"
            onClick={() => setDoorPopup('exit')}
            aria-label="Exit 문과 상호작용하기"
          >
            <span className="door-handle" />
            <span className="keyhole" />
          </button>
          <button
            type="button"
            className="door-arrow return-right"
            onClick={() => goToScene('library')}
            aria-label="책장 화면으로 돌아가기"
          >
            →
          </button>
        </section>
      )}

      {scene === 'control-room-door' && (
        <section className="door-scene" aria-label="Control Room 문 화면">
          <p className="door-top-label">Control Room</p>
          <motion.button
            type="button"
            className="single-door barred-door door-interactive"
            onClick={() => setDoorPopup('control-room')}
            aria-label="Control Room 문과 상호작용하기"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
            <span className="auth-plate">Authorized Personnel Only</span>
          </motion.button>
          <button
            type="button"
            className="door-arrow return-left"
            onClick={() => goToScene('library')}
            aria-label="책장 화면으로 돌아가기"
          >
            ←
          </button>
        </section>
      )}

      {scene === 'control-room-interior' && (
        <section className="control-room-interior" aria-label="Control Room 내부">
          <h2 className="room-title">Control Room</h2>
          <div className="interior-content">
            <div className="monitor">
              <div className="monitor-screen">
                <p>SYSTEM STATUS: ONLINE</p>
                <p>SECURITY: ACTIVE</p>
                <div className="data-display">█ ██ ███ █████ ███</div>
                <div className="data-display">██ ███ █ ██ █████</div>
              </div>
              <div className="monitor-bezel" />
            </div>
            <div className="control-panel">
              <div className="panel-light on" />
              <div className="panel-light off" />
              <div className="panel-light on" />
              <div className="panel-button" />
              <div className="panel-button" />
            </div>
            {!keyObtained && (
              <div className="console-section">
                <button
                  type="button"
                  className="console-button"
                  onClick={() => setPasswordPopup(true)}
                  aria-label="비밀번호 입력"
                >
                  ENTER PASSWORD
                </button>
              </div>
            )}
            {keyObtained && (
              <div className="key-badge">
                <span className="key-icon">🔑</span>
                <p>KEY OBTAINED</p>
              </div>
            )}
            <div className="desk">
              <button
                type="button"
                className="control-room-book"
                onClick={() => setActiveBookId('control-book')}
                aria-label="콘솔 책 읽기"
              >
                <span className="book-title-small">System Log</span>
              </button>
            </div>
          </div>
          <button
            type="button"
            className="door-arrow bottom-arrow"
            onClick={() => goToScene('control-room-door')}
            aria-label="Control Room 문으로 돌아가기"
          >
            ↓
          </button>
        </section>
      )}

      <AnimatePresence>
        {doorPopup && (
          <motion.section
            className="door-popup-overlay"
            key={doorPopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setDoorPopup(null)}
          >
            <motion.article
              className="door-popup-content"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 28, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32 }}
              onClick={(event) => event.stopPropagation()}
            >
              <h3>{doorPopup === 'exit' ? 'Exit Door' : 'Control Room'}</h3>
              <p className="door-popup-message">
                {doorPopup === 'exit'
                  ? keyObtained
                    ? '🔑 Congratulation! You escaped!'
                    : "You'll need a key to get out of here."
                  : 'This door has 5 key holes. You need all 5 orbs to unlock it.'}
              </p>
              <p className="door-orb-counter">
                {doorPopup === 'control-room' && (
                  <>
                    Orbs Collected: <span className="counter-value">{collectedCount} / 5</span>
                  </>
                )}
              </p>
              {doorPopup === 'exit' && keyObtained && (
                <motion.button
                  type="button"
                  className="enter-button"
                  onClick={() => {
                    setDoorPopup(null)
                    onRestart()
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Escape
                </motion.button>
              )}
              {doorPopup === 'control-room' && collectedCount === 5 && (
                <motion.button
                  type="button"
                  className="enter-button"
                  onClick={() => {
                    setDoorPopup(null)
                    goToScene('control-room-interior')
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Enter Control Room
                </motion.button>
              )}
              <button
                type="button"
                className="close-button"
                onClick={() => setDoorPopup(null)}
              >
                Close
              </button>
            </motion.article>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {passwordPopup && (
          <motion.section
            className="password-popup-overlay"
            key="password"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setPasswordPopup(false)}
          >
            <motion.article
              className="password-popup-content"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 28, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32 }}
              onClick={(event) => event.stopPropagation()}
            >
              <h3>ENTER PASSWORD</h3>
              {passwordMessage && (
                <motion.p
                  className={`password-feedback ${passwordMessage}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {passwordMessage === 'success'
                    ? '✓ Correct! You obtained the key.'
                    : '✗ Incorrect password.'}
                </motion.p>
              )}
              <div className="password-input-group">
                <input
                  type="password"
                  className="password-input"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                  placeholder="Enter 4 digits"
                  maxLength="4"
                  disabled={!!passwordMessage}
                  aria-label="비밀번호"
                />
              </div>
              <div className="password-button-group">
                <button
                  type="button"
                  className="submit-button"
                  onClick={handlePasswordSubmit}
                  disabled={passwordInput.length !== 4 || !!passwordMessage}
                >
                  SUBMIT
                </button>
                <button
                  type="button"
                  className="close-button"
                  onClick={() => setPasswordPopup(false)}
                >
                  CANCEL
                </button>
              </div>
            </motion.article>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeBook && (
          <motion.section
            className="memory-overlay"
            key={activeBook.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.target === e.currentTarget && closeBook()}
          >
            <motion.article
              className="book-popup"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 28, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="book-app-header">
                {activeBookIcon && (
                  <img
                    className="book-app-icon"
                    src={activeBookIcon}
                    alt={`${activeBook.title} icon`}
                  />
                )}
                <h2 className="book-app-name">{activeBook.title}</h2>
              </div>
              <p className="page-indicator">Page {activePage + 1} / 5</p>

              <section className="book-page-body">
                {typeof activePageData === 'string' ? (
                  <p>{activePageData}</p>
                ) : (
                  <div className={`page-entry-layout ${activePageData?.imageSrc || activePageData?.images ? 'has-image' : ''} ${activePageData?.images ? 'has-multiple-images' : ''} ${activePageData?.title === 'Interaction & Aesthetic Trade-offs' ? 'is-aesthetic-tradeoff' : ''} ${activePageData?.title === 'Interaction Psychology & Information Flow' ? 'is-interaction-psychology' : ''}`}>
                    <div className="page-entry-text-block">
                      <h3 className="page-entry-title">{activePageData?.title}</h3>
                      {Array.isArray(activePageData?.content) ? (
                        <div className="page-entry-content">
                          {activePageData.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="page-entry-content">{activePageData?.content}</p>
                      )}
                    </div>

                    {(activePageData?.imageSrc || activePageData?.images) && (
                      <figure className="page-entry-image-wrap">
                        {activePageData?.imageSrc && (
                          <img
                            className="page-entry-image"
                            src={activePageData.imageSrc}
                            alt={activePageData.imageAlt ?? activePageData.title}
                          />
                        )}
                        {activePageData?.images && (
                          <div className="page-entry-images-grid">
                            {activePageData.images.map((image, idx) => (
                              <figure key={idx} className="page-entry-image-card">
                                <img
                                  className="page-entry-image"
                                  src={image.src}
                                  alt={image.alt}
                                />
                                {image.caption && (
                                  <figcaption className="page-entry-subcaption">
                                    {image.caption}
                                  </figcaption>
                                )}
                              </figure>
                            ))}
                          </div>
                        )}
                        {activePageData?.imageCaption && (
                          <figcaption className="page-entry-caption">
                            {activePageData.imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </div>
                )}

                {isLastPage && (
                    <div className="orb-collect-zone">
                      <p className="orb-instruction">
                        <span className="orb-arrow">v</span> 아래 구슬을 눌러 수집하세요
                      </p>
                      <button
                        type="button"
                        className={`collectible-orb ${isActiveOrbCollected ? 'is-collected' : ''}`}
                        onClick={collectOrb}
                        aria-label="빛나는 구슬 수집"
                      >
                        <span className="orb-inner" />
                      </button>
                      <p className="orb-state">
                        {isActiveOrbCollected
                          ? '수집 완료: 기록이 안전하게 보관되었습니다.'
                          : '아직 수집되지 않았습니다.'}
                      </p>
                    </div>
                )}
              </section>
            </motion.article>
          </motion.section>
        )}
      </AnimatePresence>

      {activeBook && (
        <>
          <div className="page-controls">
            <button
              type="button"
              className="nav-arrow"
              onClick={() => goToPage(Math.max(activePage - 1, 0))}
              disabled={activePage === 0}
            >
              ←
            </button>
            <button
              type="button"
              className="nav-arrow"
              onClick={() => goToPage(Math.min(activePage + 1, 4))}
              disabled={activePage === 4}
            >
              →
            </button>
          </div>

          <button
            type="button"
            className="close-button"
            onClick={closeBook}
            aria-label="책장으로 돌아가기"
          >
            ✕
          </button>
        </>
      )}

      <AnimatePresence mode="wait">
        {activeBookId === 'control-book' && (
          <motion.section
            className="memory-overlay"
            key="control-book"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setActiveBookId(null)}
          >
            <motion.article
              className="book-popup"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 28, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="spread-tag">System Log</div>
              <h2>Access Log</h2>
              <section className="book-page-body">
                <p className="access-log">Password: 0000</p>
              </section>
              <button
                type="button"
                className="close-button"
                onClick={() => setActiveBookId(null)}
              >
                Close
              </button>
            </motion.article>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  )
}

export default MainPage
