import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="footer w-full bg-[var(--color-red)] flex flex-col sm:flex-row justify-center sm:justify-between items-center text-white text-start sm:text-left">
            <p>&copy; 2025 BattleDex. {t('allRightsReserved')} </p>
            <p>{t('developedBy')}</p>
        </footer>
    )
}

export default Footer;