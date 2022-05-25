import { useLocalStorage } from '../../hooks/useLocalStorage';
import Alert from '../Alert';
import Header from '../Header';
import List from '../List';
import { UrlForm } from '../UrlForm';

const Layout: React.FC = () => {
  const [readValue, , ,] = useLocalStorage();
  const items = readValue('urls')

  console.log(items)

  return (
    <>
      <div className='min-h-full mt-24'>
        <Header
          subheading='Shorten any url'
          description='Enter a Link into the form and click on the Button to generate a short Link.'
        />
        <main className='pb-8 mt-16'>
          <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8'>
              <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
                <section aria-labelledby='section-1-title'>
                  <h2 className='sr-only' id='section-1-title'>
                    Url Form Section
                  </h2>
                  <div className='rounded-lg bg-white overflow-hidden shadow'>
                    <div className='p-6'>
                      <UrlForm />
                    </div>
                  </div>
                </section>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <section aria-labelledby='section-2-title'>
                  <h2 className='sr-only' id='section-2-title'>
                    List form section
                  </h2>
                  <div className='rounded-lg bg-white overflow-hidden shadow'>
                    <div className='p-6'>
                      <label
                        htmlFor='url'
                        className='block text-sm font-medium text-indigo-900 mb-3'
                      >
                        Short URLs history
                      </label>
                      {items && items?.length > 0 ? (
                        <List listData={items} />
                      ) : (
                        <Alert message='You do not have any shortened URLs' />
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
