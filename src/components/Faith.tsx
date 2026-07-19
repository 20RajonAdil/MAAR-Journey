import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Faith() {
  return (
    <section id="faith" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Chapter Five — Faith</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-16"
        >
          A QUIET<br />RETURN
        </motion.h2>

        <motion.p
          {...fadeInUp}
          className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-10"
        >
          During Years 10 and 11, in 2024, Adil experienced a spiritual
          awakening. Though raised Muslim, he chose to re-examine his faith
          deeply — studying Islam alongside other traditions, and reading parts
          of the Bible and the Torah to compare their teachings.
        </motion.p>

        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-16 lg:mb-24"
        >
          The messages, he found, aligned with his beliefs. By late 2024 he
          described himself as a devout Muslim again, committed to Islamic
          practice and to service. Around the same time he stepped away from
          earlier online activities and closed his YouTube channel, choosing
          instead to focus on personal growth.
        </motion.p>

        <motion.blockquote
          {...fadeInUp}
          className="border-l-2 border-white/40 pl-6 lg:pl-10"
        >
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white">
            "Everyday plants the seeds of the person you will become."
          </p>
          <footer className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            A favourite phrase
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
