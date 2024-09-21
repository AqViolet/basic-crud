"use client";
import { useEffect, useState } from 'react';
import OutputContainer from './box';
import Dropdown from './dropdown';

const desigOpt = [
  { value: 'Junior', label: 'Junior' },
  { value: 'Board', label: 'Board' }
];

const domainOptions = [
  { value: 'Tech', label: 'Tech' },
  { value: 'Editorial', label: 'Editorial' },
  { value: 'Management', label: 'Management' },
  { value: 'Design', label: 'Design' },
];


export default function Searching() {
  const [designation, setDesig] = useState(null);
  const [domain, setDom] = useState(null);
  const [output, setOut] = useState<string | null>(null);
  const [members, setMem] = useState([]);

  useEffect(() => {
    fetch('/members.json')
      .then((response) => response.json())
      .then((data) => setMem(data.members));
  }, []);

  const handleSearch = () => {
    if (designation && domain) {
      const searched = members.filter(
        (member) =>
          member.designation === designation.value && member.domain === domain.value
      );
  
      if (searched.length > 0) {
        const result = searched
          .map((member) => {
            if (member.linkedin) {
              return `${member.name} - <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer">${member.linkedin}</a>`;
            } else {
              return `${member.name} - No LinkedIn account found.`;
            }
          })
          .join('<br />'); 
        setOut(result);
      } else {
        setOut('404: No member found of this domain.');
      }
    } else {
      setOut('Please select both a designation and a domain.');
    }
  };
  
  

  return (
    <div style={styles.container}>
      <h1>Member Lookup</h1>
      <Dropdown label="Select Designation" options={desigOpt} value={designation} onChange={setDesig}/>
      <Dropdown label="Select Domain" options={domainOptions} value={domain} onChange={setDom}/>
      
      <button onClick={handleSearch} style={styles.button}>Search</button>
      
      <OutputContainer output={output} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    marginTop: '20px',
    cursor: 'pointer',
  }
};
