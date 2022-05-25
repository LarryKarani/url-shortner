import './style.css'

const Loader: React.FC = () => {
  return (
    <div className='lds-ellipsis'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader