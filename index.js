const greeting = {
  en: 'Hello',
  pt: 'Olá',
  hi: 'Namaste',
  es: 'Hola',
  it: 'Ciao',
  de: 'Hallo',
};

exports.handler = async (event) => {
  const name = event.pathParameters.name;
  const { lang, ...info } = event.queryStringParameters;

  const message = `${greeting[lang] ? greeting[lang] : greeting['en']} ${name}`;

  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message,
      info,
      timestamp: Date.now(), 
    }),
  };
};
