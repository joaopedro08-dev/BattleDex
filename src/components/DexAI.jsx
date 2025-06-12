import { useEffect, useRef, useState } from "react"
import DexAIcon from "./DexAIcon"
import DexAiconMsg from "./DexAiconMsg";
import DexAiForm from "./DexAiForm"
import DexAiMessage from "./DexAiMessage";
import { companyInfo } from "../assets/service/companyinfo";
import { useTranslation } from "react-i18next";

function DexAI() {
    const { t } = useTranslation();
    const [chatHistory, setChatHistory] = useState([
        {
            hideInChat: true,
            role: "model",
            text: companyInfo
        },
    ]);
    const [showChatbot, setShowChatbot] = useState(false);
    const chatBodyRef = useRef();

    const generateBotResponse = async (history) => {
            const updateHistory = (text, isError = false) => {
                setChatHistory(prev => [...prev.filter(msg => msg.text !== "..."), { role: "model", text, isError }])
            }
    
            history = history.map(({ role, text }) => ({ role, parts: [{ text }] }))
    
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contents: history })
            }
    
            try {
                const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
                const data = await response.json();
    
                if (!response.ok) throw new Error(data.error.message || "Algo deu errado");
    
                const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
                updateHistory(apiResponseText)
            } catch (error) {
                updateHistory(error.message, true)
            }
        }
    
        useEffect(() => {
            chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" })
        }, [chatHistory])
    

    return (
        <div className={`container ${showChatbot ? 'show-chatbot' : ''}`}>

            <button onClick={() => setShowChatbot(prev => !prev)} className="fixed bottom-5 right-5 max-w-[520px] sm:bottom-8 sm:right-9 border-none h-12 w-12 flex cursor-pointer rounded-full bg-[var(--color-red)] items-center justify-center transition-all duration-200 ease" id="chatbot-toggler">
                <span className="material-symbols-rounded absolute text-white">mode_comment</span>
                <span className="material-symbols-rounded absolute text-white">close</span>
            </button>

            <div className="chatbot-popup w-full h-full right-0 bottom-0 rounded-none sm:h-auto sm:w-[420px] bg-white sm:rounded-2xl shadow-2xl overflow-hidden fixed sm:bottom-[90px] sm:right-9 opacity-0 pointer-events-none transition-all duration-100 ease">
                <div className="chat-header flex items-center justify-between bg-[var(--color-red)]">
                    <div className="header-info flex gap-2.5 items-center">
                        <DexAIcon />
                        <h2 className="logo-text text-white text-2xl font-semibold">DexAI</h2>
                    </div>
                    <button onClick={() => setShowChatbot(prev => !prev)} className="material-symbols-rounded h-10 w-10 border-none outline-none text-white cursor-pointer text-3xl bg-none rounded-full transition-all duration-200 ease hover:bg-[var(--color-black)]">keyboard_arrow_down</button>
                </div>
                <div ref={chatBodyRef} className="chat-body h-[calc(90%-55px)] sm:h-[460px] overflow-y-auto flex flex-col gap-5">
                    <div className="message bot-message">
                        <DexAiconMsg />
                        <p className="message-text">
                            {t("greeting")}
                        </p>
                    </div>

                    {chatHistory.map((chat, index) => (
                        <DexAiMessage key={index} chat={chat} />
                    ))}
                </div>

                <div className="chat-footer absolute bottom-0 w-full bg-white">
                    <DexAiForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                </div>
            </div>
        </div>
    )
}

export default DexAI