/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { openai } from "@/utils/openai";
import { Chat } from "@/types/Chat";
import { ChatMessage } from "@/types/ChatMessage";
import { v4 as uuid } from "uuid";

export type GPTContextType = {
  chatList: Chat[];
  chatActiveId: string;
  chatActive: Chat | undefined;
  aiLoading: boolean;
  generateAnswer: (
    messages: ChatCompletionMessageParam[]
  ) => Promise<string | null | undefined>;
  translateMessages: (messages: ChatMessage[]) => ChatCompletionMessageParam[];
  clearConversations: () => void;
  createNewChat: () => void;
  selectChat: (id: string) => void;
  deleteChat: (id: string) => void;
  editChat: (id: string, newTitle: string) => void;
  sendMessage: (message: string) => void;
};

export const GPTContext = createContext<GPTContextType | undefined>(undefined);

export const GPTContextProvider = ({ children }: { children: ReactNode }) => {
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>("");
  const [chatActive, setChatActive] = useState<Chat>();
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    setChatActive(chatList.find((item) => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if (aiLoading) {
      getAiResponse();
    }
  }, [aiLoading]);

  const generateAnswer = async (messages: ChatCompletionMessageParam[]) => {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        messages,
      });
      return completion?.choices[0]?.message?.content;
    } catch (error) {
      return undefined;
    }
  };

  const translateMessages = (messages: ChatMessage[]) => {
    const reqMessages: ChatCompletionMessageParam[] = [];
    for (const message of messages) {
      reqMessages.push({
        role: message.role,
        content: message.content,
      });
    }
    return reqMessages;
  };

  const getAiResponse = async () => {
    const chatListClone = [...chatList];
    const chatIndex = chatListClone.findIndex(
      (item) => item.id === chatActiveId
    );
    if (chatIndex > -1) {
      const response = await generateAnswer(
        translateMessages(chatListClone[chatIndex].messages)
      );

      if (response) {
        chatListClone[chatIndex].messages.push({
          id: uuid(),
          role: "assistant",
          content: response,
        });
      }
    }
    setChatList(chatListClone);
    setAiLoading(false);
  };

  const clearConversations = () => {
    if (aiLoading) return;
    setChatActiveId("");
    setChatList([]);
  };

  const createNewChat = () => {
    if (aiLoading) return;
    setChatActiveId("");
  };

  const sendMessage = (message: string) => {
    if (!chatActiveId) {
      // creating new chat
      let newChatId = uuid();
      setChatList([
        {
          id: newChatId,
          title: message,
          messages: [{ id: uuid(), role: "user", content: message }],
        },
        ...chatList,
      ]);

      setChatActiveId(newChatId);
    } else {
      // updating existing chat
      const chatListClone = [...chatList];
      const chatIndex = chatListClone.findIndex(
        (item) => item.id === chatActiveId
      );
      chatListClone[chatIndex].messages.push({
        id: uuid(),
        role: "user",
        content: message,
      });
      setChatList(chatListClone);
    }

    setAiLoading(true);
  };

  const selectChat = (id: string) => {
    if (aiLoading) return;

    const item = chatList.find((item) => item.id === id);
    if (item) {
      setChatActiveId(item.id);
    }
  };

  const deleteChat = (id: string) => {
    const chatListClone = [...chatList];
    const chatIndex = chatListClone.findIndex((item) => item.id === id);
    chatListClone.splice(chatIndex, 1);
    setChatList(chatListClone);
    setChatActiveId("");
  };

  const editChat = (id: string, newTitle: string) => {
    if (newTitle) {
      const chatListClone = [...chatList];
      const chatIndex = chatListClone.findIndex((item) => item.id === id);
      chatListClone[chatIndex].title = newTitle;
      setChatList(chatListClone);
    }
  };

  const value = {
    chatList,
    chatActiveId,
    chatActive,
    aiLoading,
    generateAnswer,
    translateMessages,
    clearConversations,
    createNewChat,
    deleteChat,
    editChat,
    selectChat,
    sendMessage,
  };

  return <GPTContext.Provider value={value}>{children}</GPTContext.Provider>;
};
