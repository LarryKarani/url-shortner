import Loader from "../Loader/Loader";

interface ButtonProps {
    label: string,
    loading?: boolean,
}

const Button: React.FC<ButtonProps> = ({label, loading}) => {
  return (
      <button
        type='submit'
        className='py-2 text-center border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full'
        disabled={loading}
      >
        {!loading ? label: <Loader/>}
      </button>
  );
}

export default Button
