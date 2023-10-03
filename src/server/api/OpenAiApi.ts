import OpenAI from 'openai';
// import fs from 'fs'

export default class OpenAiApi {
  openAi: OpenAI;

  constructor(openAi: OpenAI) {
    this.openAi = openAi;
    this.getHouseholdResponse = this.getHouseholdResponse.bind(this);
  }

  /* eslint-disable no-console,  class-methods-use-this */
  async getHouseholdResponse(): Promise<string> {
    const chatCompletion = await this.openAi.chat.completions.create({
      messages: [{ role: 'user', content: 'If inflation rates rise will household expenditure increase or descrease' }],
      model: 'gpt-3.5-turbo',
    });

    return chatCompletion.choices[0]?.message.content as string;
    return 'yo';
  }

  async getHouseholdDemographicResponse(): Promise<string> {
    const chatCompletion = await this.openAi.chat.completions.create({
      messages: [{ role: 'user', content: 'If inflation rates rise will household expenditure increase or descrease for under 25 year olds?' }],
      model: 'gpt-3.5-turbo',
    });

    return chatCompletion.choices[0]?.message.content as string;
  }
}
