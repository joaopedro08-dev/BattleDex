import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 

function HeaderResponsive({ menuOpen, closeMenu, navbar }) {
    const menuMobile = useRef(null);
    const { t } = useTranslation(); 

    useEffect(() => {
        function handleOutsideClick(event) {
            if (menuOpen && menuMobile.current && !menuMobile.current.contains(event.target)) {
                closeMenu();
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [menuOpen, closeMenu]);

    return (
        <div
            ref={menuMobile}
            className={`menu__mobile fixed top-0 left-0 z-50 h-full w-full max-w-xs bg-gray-900 text-white shadow-md transform transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            aria-label={t("mobileNavigation")} 
            aria-hidden={!menuOpen}
        >
            <div className="button__out__mobile flex justify-end p-4">
                <button
                    onClick={closeMenu}
                    className="text-white hover:text-gray-500"
                    aria-label={t("closeMenu")}
                >
                    <i className="fa-solid fa-times text-2xl"></i>
                </button>
            </div>

            <nav className="px-4 py-6">
                <ul className="flex flex-col gap-4 list-none m-0 p-0">
                    {navbar.map((item) => ( 
                        <li
                            key={item.key} 
                            onClick={closeMenu}
                            className="relative px-1 py-2 text-[var(--color-white)] font-medium text-base text-center uppercase tracking-wider
                            transition-all duration-300 hover:text-[var(--color-primary)] focus:text-[var(--color-primary)]
                            hover:[text-shadow:0_0_5px_var(--color-primary)] focus:[text-shadow:0_0_5px_var(--color-primary)]
                            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--color-primary)]
                            hover:after:w-full focus:after:w-full after:transition-all after:duration-300"
                        >
                            <a href={`#${item.key.toLowerCase()}`}>{item.text}</a> 
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
    );
}

export default HeaderResponsive;