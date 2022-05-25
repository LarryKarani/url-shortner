interface InputProps {
    error?: string
    loading?: boolean
    onChange?: () => void
    onBlur?: () => void


}

const Input: React.FC<InputProps> = ({error, loading, onChange}) => {
  return (
    <div>
      <label htmlFor='url' className='block text-sm font-medium text-gray-700'>
        Enter URL
      </label>
      <div className='my-3'>
        <input
         onChange={onChange}
          type='text'
          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
          placeholder='https://www.example.com'
        />
      </div>
    </div>
  );
};
export default Input
