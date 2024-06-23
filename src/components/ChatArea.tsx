"use client"

import { useEffect, useRef } from 'react'
import { useGPT } from '@/hooks/useGPT';
import ChatMessageLoader from './ChatMessageLoader';
import ChatPlaceholder from './ChatPlaceholder';

const ChatArea = () => {
  const scrollArea = useRef<HTMLDivElement>(null);
  const { aiLoading, chatActive } = useGPT();

  useEffect(() => {
    scrollArea.current?.scrollTo({
      top: scrollArea.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [aiLoading, chatActive?.messages?.length]);
  
  return (
    <section ref={scrollArea} className="h-0 flex-auto overflow-y-scroll">
      {!chatActive && <ChatPlaceholder />}
      {/* {chatActive &&
        chatActive.messages.map((item) => (
          <ChatMessageItem key={item.id} item={item} />
        ))} */}
      {aiLoading && <ChatMessageLoader />}
    </section>
  )
}

export default ChatArea