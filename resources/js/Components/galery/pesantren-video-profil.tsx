import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'


export default function PesanternVideoProfil({ video_profil }: { video_profil: string }) {
    const videoId = video_profil.split('v=')[1];
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo()
    }
    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    }
    return (
        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
    )
}
