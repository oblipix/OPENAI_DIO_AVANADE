const axios = require("axios");

const apiKey = "SUA_CHAVE_DE_API_AQUI";  // Substitua com sua chave de API do Azure
const endpoint = "https://testandoaiiii.openai.azure.com/";
const deployment = "gpt-4";  // Modelo GPT-4

async function main() {
  try {
    const response = await axios.post(
      `${endpoint}/openai/deployments/${deployment}/completions?api-version=2024-05-01-preview`,
      {
        messages: [
          {
            role: "system",
            content:
              "You are a Shakespearean writing assistant who speaks in a Shakespearean style...",
          },
          {
            role: "user",
            content: "Please write a short text turning down an invitation to dinner.",
          },
        ],
        max_tokens: 150,
        temperature: 0.7,
        top_p: 0.95,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Erro ao chamar a API:", error);
  }
}

main();

