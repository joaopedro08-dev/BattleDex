import About from "./About";
import Channels from "./Channels";
import Pokedex from "./Pokedex";
import { motion, AnimatePresence } from "framer-motion";
import SpeechSythesis from "./SpeechSythesis";

function Main() {
    return (
        <main>
            <AnimatePresence mode="wait">
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.5 }}
                    id="sobre"
                >
                    <About />
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.2 }}
                >
                    <Pokedex />
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ amount: 0.2 }}
                >
                    <Channels />
                </motion.section>
            </AnimatePresence>

            <SpeechSythesis />

        </main>
    )
}

export default Main;