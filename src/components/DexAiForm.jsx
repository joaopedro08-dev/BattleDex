import { useRef } from "react";
import { useTranslation } from "react-i18next";

function DexAiForm({ chatHistory, setChatHistory, generateBotResponse }) {
    const inputRef = useRef();
    const { t } = useTranslation();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        setChatHistory((history) => [...history, { role: "model", text: t("thinkingMessage"), isThinking: true }]);

        setTimeout(() => {
            setChatHistory((history) => [
                ...history,
                { role: "model", text: t("thinkingMessage"), isThinking: true }
            ]);

            generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
        }, 600);

    }
    return (
        <form action="#" className="chat-form flex items-center bg-white outline-1 outline-solid outline-[#cccce5] rounded-4xl shadow-2xs focus-within:outline-2 focus-within:border-solid focus-within:outline-[var(--color-red)]" onSubmit={handleFormSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder={t("messagePlaceholder")}
                className="message-input border-none outline-none bg-none h-12 text-base w-full"
                required
            />
            <button className="material-symbols-rounded h-9 w-9 border-none outline-none cursor-pointer text-lg text-white shrink-0 rounded-full bg-[var(--color-red)] transition-all duration-200 ease hover:bg-[var(--color-black)]">arrow_upward</button>
        </form>
    )
}

export default DexAiForm;