import {FC, useState, useEffect, useCallback} from "react";
import {dataAPI} from "../../services/api/data";
import {useParams} from "react-router-dom";
import PopupSample from "./popup/popup";
import ContentsSample from "./contents-sample/contents-sample";
import useMediaQuery from "../../hooks/useMediaQuery";
import ContentsMobile from "./contents-mobile/contents-mobile";
import samplePageStyles from "./sample-page.module.css";
import Loader from "../../components/loader/loader";

const SamplePage: FC = () => {

  const [popupOpen, setPopupOpen] = useState(true)
  const [contentsOpen, setContentsOpen] = useState(false)
  const [scrollingUp, setScrollingUp] = useState(false)
  const [scrollValue, setScrollValue] = useState(0)
  const onScroll = useCallback((): void => {
    const currentScrollY = window.pageYOffset
    if (scrollValue < currentScrollY && scrollingUp) {
      setScrollingUp(false)
    }
    if (scrollValue > currentScrollY && !scrollingUp) {
      setScrollingUp(true)
    }
    setScrollValue(currentScrollY)
  }, [scrollValue, setScrollValue, scrollingUp])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  useEffect(() => {
    const audioElement = document.querySelector<HTMLDivElement>(".player__container")
    if (audioElement == null) {
      return
    }
    const sourceElement = audioElement.querySelector<HTMLSourceElement>("#audio")
    if (sourceElement == null) {
      return
    }
    const playButton = audioElement.querySelector<HTMLButtonElement>(".player__button-play")
    const reverseAntiClockwiseButton = audioElement.querySelector<HTMLButtonElement>(".player__button-reverse-anticlockwise")
    const reverseClockwiseButton = audioElement.querySelector<HTMLButtonElement>(".player__button-reverse-clockwise")
    const muteButton = audioElement.querySelector<HTMLButtonElement>(".player__button-mute")

    const audio = new Audio(sourceElement.src)
    let duration: number
    let isPlaying: boolean

    const onLoadedMetaData = () => {
      duration = audio.duration
    }

    const onEnded = () => {
      isPlaying = false
      playButton?.classList.remove("player__button-stop")
      playButton?.classList.add("player__button-play")
    }

    const getTime = (num: number) => {
      let hours   = Math.floor(num / 3600)
      let minutes = Math.floor((num - (hours * 3600)) / 60)
      let seconds = Math.floor(num - (hours * 3600) - (minutes * 60))
      if (hours === 0) {
        return `${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
      }
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
    }

    const timeElement = audioElement.querySelector(".player__time")
    if (timeElement != null) {
      setInterval(() => {
        timeElement.textContent = getTime(isPlaying || audio.paused ? audio.currentTime : duration)
      }, 500)
    }
    audio.addEventListener('loadedmetadata', onLoadedMetaData)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener(
      "loadeddata",
      () => {
        audio.volume = .5
      },
      false
    )
    if (playButton != null) {
      playButton.addEventListener(
        "click",
        () => {
          if (audio.paused) {
            isPlaying = true
            playButton.classList.remove("player__button-play")
            playButton.classList.add("player__button-stop")
            audio.play().then(() => console.log('Playing...'))
          } else {
            isPlaying = false
            playButton.classList.remove("player__button-stop")
            playButton.classList.add("player__button-play")
            audio.pause()
          }
        },
        false
      )
    }
    if (reverseAntiClockwiseButton) {
      reverseAntiClockwiseButton.addEventListener(
        "click",
        () => {
          if (audio.currentTime > 0) {
            audio.currentTime = Math.max(audio.currentTime - 60, 0)
          }
        }
      )
    }
    if (reverseClockwiseButton) {
      reverseClockwiseButton.addEventListener(
        "click",
        () => {
          if (audio.currentTime < duration) {
            audio.currentTime = Math.min(audio.currentTime + 60, duration)
          } else {
            isPlaying = false
            playButton?.classList.remove("player__button-stop")
            playButton?.classList.add("player__button-play")
          }
        }
      )
    }
    if (muteButton != null) {
      muteButton.addEventListener(
        "click",
        () => {
          audio.muted = !audio.muted
          if (audio.muted) {
            muteButton.classList.remove("player__button-mute")
            muteButton.classList.add("player__button-unmute")
          } else {
            muteButton.classList.remove("player__button-unmute")
            muteButton.classList.add("player__button-mute")
          }
        },
        false
      )
    }
    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetaData)
      audio.removeEventListener('ended', onEnded)
    }
  })

  const mobile = useMediaQuery('(max-width: 767px)')
  const {page} = useParams<{page?: string}>()
  const {isLoading, data} = dataAPI.useGetSampleContentQuery(page)
  if (isLoading || !data || data.length === 0) {
    return null
  }

  const openContents = (): void => {
    setContentsOpen(true)
  }

  if (isLoading) return <Loader />

  return (
    <main className={samplePageStyles.main}>
      <div className={samplePageStyles.tag}>
        <p className={samplePageStyles.tagPart}>детство</p>
        <p className={samplePageStyles.tagPart}>&#183;</p>
        <p className={samplePageStyles.tagPart}>опыт читателя</p>
      </div>
      <button
        type="button"
        className={samplePageStyles.buttonContent}
        onClick={openContents}
      >
        оглавление
      </button>
      {
        contentsOpen && (
          <ContentsSample
            openContents={() => setContentsOpen(true)}
            closeContents={() => setContentsOpen(false)}
          />
        )
      }
      {
        popupOpen && (
          <PopupSample closePopup={() => setPopupOpen(false)}/>
        )
      }
      {
        mobile && scrollingUp && (
          <ContentsMobile />
        )
      }
      <article className="article" dangerouslySetInnerHTML={{__html: data[0].content}}/>
    </main>
  )
}

export default SamplePage
