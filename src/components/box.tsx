interface OutputCntPrp {
  output: string | null;
}

export default function OutputContainer({ output }: OutputCntPrp) {
  return (
    <div style={styles.outputContainer}>
      {output ? <p dangerouslySetInnerHTML={{ __html: output }}></p> : <p>Please make a selection and search for a member.</p>}
    </div>
  );
}

const styles = {
  outputContainer: {
    marginTop: '30px',
    padding: '20px',
    width: '600px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
};
