import styles from  "./ComboBox.module.css"

type DropdownItem = {
  id: string,
  value: string,
  text: string
}

interface Props {
  items: DropdownItem[],
  placeholder: string;
  onChange: (val: string) => void;
}

export const ComboBox = (props: Props) => {
  const {items, placeholder, onChange} = props

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  }
  
  return (
    <div>
      <p className={styles.comboBoxLabel}>{placeholder}</p>
      <select className={styles.comboBox} onChange={handleChange}>
        {
          items.map((item: DropdownItem) => <option key={item.id}>{item.text}</option>)
        }
      </select>
    </div>
  )
}
