type Role = 'user' | 'assistant';

type ChatMessage = {
  role: Role;
  message: string;
};

function serializeChatHistory(messages: ChatMessage[]): string {
  const serializedMessages = messages.map((message) => {
    return `<|${message.role}|>${message.message}<|endoftext|>`;
  });

  return serializedMessages.join('');
}

function deserializeChatHistory(serialized: string): ChatMessage[] {
  const messages: ChatMessage[] = [];
  const messageTokens = serialized.split('<|');

  for (const token of messageTokens) {
    if (token) {
      const [role, message] = token.split('|>');
      messages.push({
        role: role.trim() as 'user' | 'assistant',
        message: message.trim(),
      });
    }
  }

  return messages;
}

export { serializeChatHistory, deserializeChatHistory };
