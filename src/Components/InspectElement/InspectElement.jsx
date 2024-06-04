'use client'
import { useEffect } from 'react'

const InspectElement = ({ children }) => {
  useEffect(() => {

    if (process.env.NEXT_PUBLIC_ALLOW_INSPECT === "true") {

      const handleContextMenu = e => {
        e.preventDefault()
      }

      

      // document.addEventListener('contextmenu', handleContextMenu)
      // document.addEventListener('keydown', handleKeyDown)

      return () => {
        // document.removeEventListener('contextmenu', handleContextMenu)
        // document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [])

  return children
}

export default InspectElement
