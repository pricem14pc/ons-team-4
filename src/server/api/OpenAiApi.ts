
import OpenAI from 'openai';

export default class OpenAiApi {
  openAi: OpenAI;

  constructor(openAi: OpenAI) {
    this.openAi = openAi;
    this.getResponse = this.getResponse.bind(this);
  }

  /* eslint-disable no-console,  class-methods-use-this */
  getResponse(): string {
    return 'hello'; 
  }
}
