import { motion } from 'framer-motion'

function StartPage({ onEnter }) {
  return (
    <main className="start-page">
      <h1 className="start-title">Memory Library</h1>

      <section className="start-hero" aria-label="Start screen">
        <motion.div
          className="start-placeholder"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            You wake up to find yourself standing in the heavy silence of an
            unfamiliar library. This is the Memory Library. It is a place
            where the countless digital footprints we leave behind are
            preserved as 'memories'. How does the technology we use every day
            curate our lives, and in what ways does it interact with us?
          </p>

          <p>
            You are trapped within this archive. The only way to escape is to
            find the five records of memory hidden here and peer into the core
            of their UX design. At the end of each record, collect an Orb of
            Memory. The pieces of analysis you gather will be the only keys to
            unlocking the Control Room and finding your way out.
          </p>

          <p className="start-closing">
            Are you ready to uncover the hidden insights beyond the bookshelves?
          </p>
        </motion.div>
      </section>

      <div className="start-actions">
        <p className="start-hint">Enter when you are ready to begin the search.</p>

        <motion.button
          type="button"
          className="enter-button"
          onClick={onEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Enter
        </motion.button>
      </div>
    </main>
  )
}

export default StartPage
