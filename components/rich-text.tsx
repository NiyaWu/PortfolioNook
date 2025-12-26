"use client"

import React from "react"

interface RichTextProps {
  children: string
  className?: string
  as?: "p" | "span" | "div" | "h4"
}

// Parse **bold** markdown syntax and render as React elements
export function RichText({ children, className = "", as: Component = "p" }: RichTextProps) {
  const parseText = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = []
    const regex = /\*\*(.*?)\*\*/g
    let lastIndex = 0
    let match

    while ((match = regex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }
      // Add the bold text
      parts.push(
        <strong key={match.index} className="font-semibold text-foreground">
          {match[1]}
        </strong>
      )
      lastIndex = match.index + match[0].length
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }

    return parts
  }

  return <Component className={className}>{parseText(children)}</Component>
}
