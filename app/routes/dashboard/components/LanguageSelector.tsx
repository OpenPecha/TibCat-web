import { LANGUAGES } from "~/lib/constants";

export default function LanguageSelector({
  sourceLang,
  setSourceLang,
  targetLang,
  setTargetLang,
  getTargetLanguages,
}) {

  const handleSourceLangChange = (e) => {
    const currentLang = e.target.value;
    setSourceLang(currentLang);
    if (targetLang === currentLang) {
      const targetKeys = Object.keys(LANGUAGES).filter(
        (key) => key !== currentLang
      );;
      setTargetLang(currentLang === "bo" ? targetKeys[0]:"bo");
    }
  }
  return (
    <>
      <div className="flex items-center ">
        <label
          htmlFor="sourceLang"
          className="block text-sm text-neutral-800 text-nowrap"
        >
          Source Language:
        </label>
        <select
          id="sourceLang"
          name="sourceLang"
          value={sourceLang}
          onChange={handleSourceLangChange}
          className="bg-transparent block w-fit text-sm focus:ring-0 outline-none cursor-pointer"
        >
          {Object.entries(LANGUAGES).map(([code, name]) => (
            <option key={code} value={code} className="cursor-pointer">
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <label
          htmlFor="targetLang"
          className="block text-sm text-neutral-800 text-nowrap"
        >
          Target Language:
        </label>
        <select
          id="targetLang"
          name="targetLang"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          className="bg-transparent block w-fit text-sm focus:ring-0 outline-none cursor-pointer"
        >
          {getTargetLanguages().map((code) => (
            <option key={code} value={code} className="cursor-pointer">
              {LANGUAGES[code]}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
