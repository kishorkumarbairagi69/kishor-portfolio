export {}

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        options: {
          videoId: string
          playerVars?: Record<string, number>
          events?: {
            onStateChange?: (event: {
              data: number
            }) => void
          }
        }
      ) => any

      PlayerState: {
        PLAYING: number
        PAUSED: number
        ENDED: number
        BUFFERING: number
        CUED: number
        UNSTARTED: number
      }
    }

    onYouTubeIframeAPIReady: () => void
  }
}