import DexAiconMsg from "./DexAiconMsg";

function DexAiMessage({ chat }) {

    return (
        !chat.hideInChat && (
            <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message ${chat.isError ? "error" : ""}`}>
                {chat.role === "model" && <DexAiconMsg />}
                <p className="message-text">{chat.text}</p>
            </div>
        )

    )
}

export default DexAiMessage;