import About from "./About";
import Channels from "./Channels";
import Pokedex from "./Pokedex";
import { motion, AnimatePresence } from "framer-motion";
import SpeechSythesis from "./SpeechSythesis";

function Main() {
    return (
        <main>
            <AnimatePresence mode="wait">
                <section className="w-full block">
                    <About />
                </section>

                <motion.section
                    className="w-full block"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.2 }}
                >
                    <Pokedex />
                </motion.section>

                <motion.section
                    className="w-full block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ amount: 0.2, once: true }}
                >
                    <Channels />
                </motion.section>
            </AnimatePresence>

            <SpeechSythesis />

        </main>
    )
}

export default Main;