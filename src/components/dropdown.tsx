import Select from 'react-select';

interface Props {
  label: string;
  options: { value: string; label: string }[];
  value: { value: string; label: string } | null;
  onChange: (value: { value: string; label: string } | null) => void;
}

export default function Dropdown({ label, options, value, onChange }: Props) {
  return (
    <div style={styles.con}>
      <label>{label}</label>
      <Select 
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

const styles = {
  con: {
    margin: '10px 0',
    width: '200px',
  }
};
