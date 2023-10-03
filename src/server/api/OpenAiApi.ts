
import OpenAI from 'openai';

export default class OpenAiApi {
  openAi: OpenAI;

  constructor(openAi: OpenAI) {
    this.openAi = openAi;
    this.getResponse = this.getResponse.bind(this);
  }

  /* eslint-disable no-console,  class-methods-use-this */
  async getResponse(): Promise<string> {
    const response = await this.openAi.files.create({ file: new File(['householdIncome'], 'input.jsonl'), purpose: 'fine-tune' });
    console.debug(response);
    const chatCompletion = await this.openAi.chat.completions.create({
      messages: [{ role: 'user', content: 'what is the was the inflation rate in the UK before 2021' }],
      model: 'gpt-3.5-turbo',
    });
  
    console.log(chatCompletion.choices);
    return chatCompletion.choices[0]?.message.content as string; 
  }

  
}
