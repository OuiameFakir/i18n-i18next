import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div >
      <h1>Try i18n</h1>
      <h2>The language : {t('test')}</h2>
    </div>
  );
}
