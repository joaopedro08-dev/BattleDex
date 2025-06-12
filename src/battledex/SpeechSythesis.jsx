import { useState, useEffect } from 'react';

function SpeechSynthesis() {
  const defaultTextToSpeak = "Olá! Eu sou a DexAi em voz, Seja bem-vindo(a) BattleDex!. O objetivo é descomplicar as batalhas Pokémon e te ajudar a se tornar um treinador de elite.                         No BattleDex, você encontrará tudo o que precisa para iniciar sua jornada, desde uma introdução completa ao cenário competitivo e os fundamentos para construir times poderosos, até estratégias avançadas de batalha como previsão de jogadas e gestão de turnos. Vamos explorar as regras dos principais formatos, como Smogon Tiers e VGC, e te apresentar ferramentas essenciais como o Pokémon Showdown! e a Smogon University para aprimorar suas habilidades.";

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const populateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      const ptBrVoice = availableVoices.find(
        (voice) => voice.lang === 'pt-BR' || voice.lang.startsWith('pt-')
      );
      setSelectedVoice(ptBrVoice || availableVoices[0]);
    };

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }
    populateVoices(); 
  }, []);

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert("Desculpe, seu navegador não suporta síntese de fala.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(defaultTextToSpeak);

      utterance.voice = selectedVoice;
      utterance.pitch = 1; 
      utterance.rate = 1;  

      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <button
      onClick={handleToggleSpeech}
      className={`fixed top-1/2 left-4 -translate-y-1/2
                 ${isSpeaking ? 'bg-red-500 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'}
                 w-12 h-12 rounded-full shadow-lg
                 flex justify-center items-center cursor-pointer z-50
                 transition-all duration-300 ease-in-out
                 focus:outline-none focus:ring-4 focus:ring-red-300`}
      aria-label={isSpeaking ? "Parar leitura" : "Ouvir mensagem de boas-vindas"}
      title={isSpeaking ? "Clique para parar a leitura" : "Clique para ouvir a mensagem"}
    >
      <i className="fa-solid fa-microphone text-white text-xl"></i>
    </button>
  );
}

export default SpeechSynthesis;