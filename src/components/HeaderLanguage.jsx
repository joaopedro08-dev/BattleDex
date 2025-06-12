import { useTranslation } from 'react-i18next';

function HeaderLanguage() {
    const { t, i18n } = useTranslation();

    const languageOptions = [
        { key: 'pt', label: "🇧🇷 Português" },
        { key: 'en', label: "🇺🇸 English" },
        { key: 'es', label: "🇪🇸 Español" }, 
        { key: 'jp', label: "🇯🇵 日本語" }, 
        { key: 'fr', label: "🇫🇷 Français" }, 
        { key: 'cn', label: "🇨🇳 普通话" }, 
    ];

    const currentLanguageLabel = languageOptions.find(opt => opt.key === i18n.language)?.label || t('languages');

    return (
        <div className="languages relative text-base font-medium md:inline-block">
            <details className="relative inline-block group">
                <summary
                    className="list-none bg-white border border-gray-300 rounded-lg cursor-pointer transition-all duration-300 ease-in-out shadow-sm uppercase hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 px-3 py-1.5 flex items-center gap-2"
                    aria-label={t("selectLanguage")}
                >
                    {currentLanguageLabel}
                    <svg
                        className="w-4 h-4 transition-transform duration-300 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <ul className="language-options absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-md list-none z-[100] w-max min-w-36">
                    {languageOptions.map((langOpt) => (
                        <li
                            key={langOpt.key}
                            onClick={() => i18n.changeLanguage(langOpt.key)}
                            className="cursor-pointer transition-all duration-200 ease-in-out whitespace-nowrap hover:bg-blue-100 hover:text-blue-800 px-4 py-2 text-sm"
                        >
                            {langOpt.label}
                        </li>
                    ))}
                </ul>
            </details>
        </div>
    );
}

export default HeaderLanguage;