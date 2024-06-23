"use client"

import { useGPT } from '@/hooks/useGPT';
import React, { useEffect, useRef } from 'react'

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
    <div>ChatArea</div>
  )
}

export default ChatArea