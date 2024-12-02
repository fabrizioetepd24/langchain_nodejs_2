import { ChatOpenAI } from '@langchain/openai';

import 'dotenv/config';

const llm = new ChatOpenAI({
  model: 'gpt-4o',
  openAIApiKey: process.env.OPENAI_KEY,
});

console.log('Protótipo de IA Gen');
console.log('<><><><><><><><><>');

const question = "Como são os problemas da educação no Brasil?";
console.log(`Pergunta: ${question}`);

const response = await llm.invoke(question);
console.log(`Resposta: ${response.content}`);