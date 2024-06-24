"use client"

import { useEffect } from "react"

export default function Server() {
  useEffect(() => {
    const isTauri = (window as any).__TAURI__
    if (isTauri) {
      // Import tauri command and execute the sidecar process
      import("@tauri-apps/api/shell").then((mod) => {
        const command = mod.Command.sidecar("bin/server")
        command.execute()
      })
    }
  }, [])
  return <></>
}
