const rtlLanguages: string[] = ["fa"];

export default function getDirectionByLanguage(lng: string) {
  const dir = rtlLanguages.includes(lng) ? "rtl" : "ltr";
  return dir;
}
