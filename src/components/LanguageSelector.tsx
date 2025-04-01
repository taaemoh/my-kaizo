import {ComboBox} from '../ui/ComboBox'
import { LanguageCode } from '../types/Language';

interface Props {
  onLanguageChange: (val: LanguageCode) => void;
}

const LanguageSelector = (props: Props) => {
  const {onLanguageChange} = props

  const handleChange = (language: string) => {
    onLanguageChange(language as LanguageCode);
  }
  
  const items = Object.entries(LanguageCode).map(([key, value]) => ({
    id: value,
    value: value,
    text: key,
  }));
  
  return (
    <ComboBox placeholder='Language' items={items} onChange={handleChange} />
  )
}

export default LanguageSelector;