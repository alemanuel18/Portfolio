import { useCyber } from './useCyber';

/**
 * Devuelve el valor de un campo en el idioma activo.
 * Si existe `campo_en` y el idioma es inglés, lo usa.
 * Si no existe traducción, cae de vuelta al campo original.
 *
 * @example
 *   const tf = useTranslate();
 *   tf(item, 'desc')   // → item.desc_en (en) | item.desc (es)
 *   tf(item, 'why')    // → item.why_en  (en) | item.why  (es)
 */
export function useTranslate() {
    const { lang } = useCyber();

    return (item, field) => {
        if (lang === 'en') {
            return item[`${field}_en`] ?? item[field] ?? '';
        }
        return item[field] ?? '';
    };
}
