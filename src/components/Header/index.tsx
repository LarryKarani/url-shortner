interface HeaderProps {

    headline?: string,
    subheading?: string,
    description?: string

}

const Header: React.FC<HeaderProps> = ({headline, subheading, description}) => {
  return (
    <div className='bg-white mx-auto md:w-3/4 lg:mt-5'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>
            {headline}
          </h2>
          <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            {subheading}
          </p>
          <p className='max-w-xl mt-5 mx-auto text-lg text-gray-900'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header
