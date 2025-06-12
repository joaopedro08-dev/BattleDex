import { useTranslation, Trans } from "react-i18next";
import AboutImage from "../assets/imgs/About.png";

function About() {
  const { t } = useTranslation("about"); 

  return (
    <section className="about_us bg-white">
      <div className="about_us max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <img
          src={AboutImage}
          alt="Logo do BattleDex"
          className="w-full max-w-sm lg:max-w-md object-contain h-auto"
        />
        <div className="about_us_text flex flex-col justify-center text-center lg:text-left">
          <h2 className="title_about_us text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            <Trans i18nKey="title" components={{ 1: <span className="text-[var(--color-red)]" /> }} />
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            <Trans i18nKey="paragraph1" components={{ strong: <strong className="font-semibold" /> }} />
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            <Trans i18nKey="paragraph2" />
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
