import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'es'];
 
export default getRequestConfig(async ({locale}) => {
    const baseLocale = new Intl.Locale(locale).baseName;
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(baseLocale)) notFound();

  return {
    messages: (await import(`./messages/${baseLocale}.json`)).default
  };
});


// // Changing : 
// // This : 
// export default getRequestConfig(async ({locale}) => {
//     // Validate that the incoming `locale` parameter is valid
//     if (!locales.includes(locale as any)) notFound();

// // To This : 
// export default getRequestConfig(async ({locale}) => {
//     const baseLocal = new Intl.Locale(locale).baseName;
//   // Validate that the incoming `locale` parameter is valid
//   if (!locales.includes(baseLocal)) notFound();
 

// Reason : 