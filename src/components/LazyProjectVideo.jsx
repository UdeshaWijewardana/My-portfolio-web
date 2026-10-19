"use client";

import Image from "next/image";
import { LoaderCircle, Play, X } from "lucide-react";
import { useCallback, useRef, useState } from "react";

export default function LazyProjectVideo({ src, poster, title }) {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  const attachAndPlay = useCallback((node) => {
    videoRef.current = node;
    if (!node) return;

    setIsLoading(true);
    const playback = node.play();
    if (playback && typeof playback.catch === "function") {
      playback.catch(() => {
        // Autoplay can still be rejected by strict mobile policies.
        // Native controls remain available for a second explicit tap.
        setIsLoading(false);
      });
    }
  }, []);

  const startVideo = () => {
    setIsLoading(true);
    setIsActive(true);
  };

  const closeVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
    videoRef.current = null;
    setIsActive(false);
    setIsLoading(false);
  };

  if (!isActive) {
    return (
      <button
        type="button"
        className="video-poster"
        onClick={startVideo}
        aria-label={`Play demonstration video for ${title}`}
      >
        <Image
          src={poster}
          alt=""
          fill
          sizes="(max-width: 800px) 100vw, 20vw"
          className="video-poster-image"
        />
        <span className="video-poster-shade" aria-hidden="true" />
        <span className="video-play" aria-hidden="true">
          <Play size={18} fill="currentColor" />
        </span>
        <span className="video-label">Play project demo</span>
      </button>
    );
  }

  return (
    <div className="video-player-shell">
      <video
        ref={attachAndPlay}
        src={src}
        poster={poster}
        preload="none"
        controls
        playsInline
        onLoadStart={() => setIsLoading(true)}
        onWaiting={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onPlaying={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        aria-label={`${title} demonstration video`}
      >
        Your browser does not support HTML5 video.
      </video>
      {isLoading && (
        <span className="video-loading" role="status">
          <LoaderCircle size={20} />
          <span className="sr-only">Loading video</span>
        </span>
      )}
      <button
        type="button"
        className="video-close"
        onClick={closeVideo}
        aria-label="Close video and release media"
      >
        <X size={14} />
      </button>
    </div>
  );
}
