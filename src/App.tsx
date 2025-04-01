import { useState } from "react"
import styles from "./App.module.css"
import LanguageSelector from "./components/LanguageSelector"
import { LanguageCode } from "./types/Language"
import { ResponsiveList } from "./ui/ResponsiveList"
import { TextInput } from "./ui/TextInput"
import { skipToken } from '@reduxjs/toolkit/query';
import { LoaderAnimation } from "./ui/LoaderAnimation"
import { useGetGifsByTextQuery } from './services/giphyApi'
import { ErrorSection } from "./ui/ErrorSection"

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>(LanguageCode.English);

  const { data: gifs, error, isLoading } = useGetGifsByTextQuery(
    searchText !== '' ? {searchTerm: searchText, language: selectedLanguage} : skipToken
  );
  
  const handleChangeSearchTerm = (newTerm: string) => {
    setSearchText(newTerm)
  }

  const handleChangeSelectedLanguage = (language: LanguageCode) => {
    setSelectedLanguage(language)
  }
  
  if (error) {
    return <ErrorSection title="ERROR!" message="Error getting gifs" />
  }
  
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>My giphy!</h1>
        <LanguageSelector onLanguageChange={handleChangeSelectedLanguage} />
        <TextInput placeholder="Search for gifs" onChange={handleChangeSearchTerm} value={searchText} />
        { isLoading &&  <LoaderAnimation text="Loading gifs!" /> }
        {
          gifs && <ResponsiveList>
          {
            gifs.data.map((gif: { id: string; images: { fixed_height_small: { url: string } } }) => {
              return (
                <ResponsiveList.Column key={gif.id}>
                  <img src={gif.images.fixed_height_small.url} width={100} height={100} loading="lazy" />
                </ResponsiveList.Column>
              );
            })
          }
        </ResponsiveList>
        }
        </div>
    </div>
  )
}

export default App
