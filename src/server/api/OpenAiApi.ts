import OpenAI from 'openai';
import fs from 'fs'

export default class OpenAiApi {
  openAi: OpenAI;

  constructor(openAi: OpenAI) {
    this.openAi = openAi;
    this.getResponse = this.getResponse.bind(this);
  }

  /* eslint-disable no-console,  class-methods-use-this */
  async getResponse(): Promise<string> {
    const filePath = `${__dirname}\\..\\..\\data`;
    const dataFile = `${filePath}\\consumer_price_inflation_time_series_3009232.jsonl`;
    console.debug('filePath ', filePath);
   const response = await this.openAi.files.create({ file: fs.createReadStream(dataFile), purpose: 'fine-tune' });
    console.debug(response); 
/*     const chatCompletion = await this.openAi.chat.completions.create({
      messages: [{ role: 'user', content: 'what is the was the inflation rate in the UK before 2021' }],
      model: 'gpt-3.5-turbo',
    }); */

    //console.log(chatCompletion.choices);
    //return chatCompletion.choices[0]?.message.content as string;
    return 'yo';
  }
}
