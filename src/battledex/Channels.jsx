import { useTranslation, Trans } from "react-i18next";

function Channels() {
    const { t } = useTranslation();

  return (
    <div className="channels w-full px-6 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-[var(--color-black)]">{t("titleChannels")}</h1>
        <Trans i18nKey="subtitleChannels" components={{ p: <p className="text-gray-600 text-lg" />}} />
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md flex flex-col justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-red)] text-center">{t("eschoolTitle")}</h2>
            <p className="text-[var(--color-blue-marine)] leading-relaxed mt-2">
              <Trans i18nKey="eschoolDescription" components={{ strong: <strong /> }} />
            </p>
          </div>
          <div className="rounded-lg overflow-hidden mt-4">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/s3mSs_h5BNw?si=AQW_vWkcU2yff7sS"
              title="Vídeo do canal eSchool sobre batalhas Pokémon"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md flex flex-col justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-red)] text-center">{t("brttarTitle")}</h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              <Trans i18nKey="brttarDescription" components={{ strong: <strong /> }} />
            </p>
          </div>
          <div className="rounded-lg overflow-hidden mt-4">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/mewdSy3tJw4?si=NP0vexKP4ddIPIGn"
              title="Vídeo do canal BRTTar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Channels;
