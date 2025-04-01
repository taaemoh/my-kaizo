import { useEffect, useState } from "react";
import styles from "./TextInput.module.css"

interface Props {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}

export const TextInput = (props: Props) => {
  const [inputValue, setInputValue] = useState('')
  const {placeholder, value, onChange} = props
  const DEBOUNCE_THRESHOLD = 500

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(inputValue)
    }, DEBOUNCE_THRESHOLD);

    return () => {
      clearTimeout(handler);
    };

  }, [inputValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  
  return (
    <input className={styles.inputText} type="text" placeholder={placeholder} value={inputValue} onChange={handleChange} />
  )
}
