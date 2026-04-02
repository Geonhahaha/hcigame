import { motion } from 'framer-motion'

function StartPage({ onEnter }) {
  return (
    <main className="start-page">
      <h1 className="start-title">Memory Library</h1>

      <section className="start-hero" aria-label="시작 화면">
        <motion.p
          className="start-placeholder"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Description placeholder: 여기에 게임 소개 문구와 조작 안내를 넣어주세요.
        </motion.p>
      </section>

      <motion.button
        type="button"
        className="enter-button"
        onClick={onEnter}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Enter
      </motion.button>
    </main>
  )
}

export default StartPage
