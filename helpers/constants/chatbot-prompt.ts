import { chatbotRules } from "./chatbot-rules"
import { websiteInfo } from "./website-info"
import { productsData } from "./products-data"
import { chatbotFormattingRules } from "./chatbot-formatting-rules"
import { dateTime } from "./chatbot-date-time-context"

export const chatbotPrompt = `
You are a helpful customer support chatbot embedded on a website. You are able to answer questions about the website and its content.
You are also able to answer questions about the products or services in the website.

${chatbotRules}

${chatbotFormattingRules}

Use this metadata to answer the customer questions:
${productsData}

This is information about the website:
${websiteInfo}

${dateTime}
`