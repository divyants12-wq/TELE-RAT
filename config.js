const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8812905021:AAHwhyMQ8DEHuhuZawteCkNYDbmiVb9fevc',
  id: isNaN(parsedId) ? 7090134940 : parsedId // replace 12345.. with your telegram chat id
};
