import { useQuery } from 'react-query';
import { useForm, Controller } from 'react-hook-form';
import { isValidHttpUrl } from '../../utils/checkUrl';
import Button from '../Button';
import Input from '../Input';
import { shortenUrlService } from '../../service/shortenUrlHook';
import { useContext, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { Context } from '../../context/context';
import { useLocalStorage } from '../../hooks/useLocalStorage';


import NotificationAlert from '../Notification';


interface Props {
  onSubmit?: (data: any) => void;
  loading?: boolean;
  headline?: string;
  content?: string;
  error?: string;
}

type FormInputs = {
  url: string;
};

const urlFieldOptions = {
  required: 'Url is required',
  validate: {
    checkUrl: (input: string) => isValidHttpUrl(input) || 'Enter a valid url',
  },
};

export const UrlForm: React.FC<Props> = (props) => {

 const [urlLink, setUrlLink] = useState<string | null >(null)
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputs>({ mode: 'onChange', reValidateMode: 'onChange' });


  const [readValue, setValue, ] = useLocalStorage();

  const { data, isLoading, error, refetch } = useQuery(
    ['url', urlLink],
    () => shortenUrlService(urlLink),
    { refetchOnWindowFocus: false, enabled: false }
  );

  const onUrlSubmit = async (data: FormInputs) => {
    await setUrlLink(data.url);
    refetch();
  };

  const context: any = useContext(Context)

  const {setContextValue, contextValue} = context
  
  const dataUrls = readValue('urls')
  
  const emptyUrl: Array<string> = [...dataUrls]
   

  useEffect(() => {
      if(data){
          setContextValue({
            ...contextValue,
            urls: [...contextValue.urls, data.data.result.full_short_link],
          });

          emptyUrl.push(data.data.result.full_short_link);
          console.log(emptyUrl)
          setValue('urls', emptyUrl);
      }

  },[data])

  return (
    <div className='mx-auto p-4'>
      <h3 className='text-white font-normal leading-none text-3xl md:text-5xl'>
        {props.headline}
      </h3>
      <form
        action='#'
        autoComplete='no'
        onSubmit={handleSubmit(onUrlSubmit)}
        method='POST'
      >
        <Controller
          rules={{ ...urlFieldOptions }}
          name='url'
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.url && (
          <p className='text-sm text-red-500 my-2'>{errors.url.message}</p>
        )}
        {error instanceof AxiosError && (
          <p className='text-sm text-red-500 my-2'>
            {error.response?.data.error}
          </p>
        )}
        {data &&
          data?.data?.result?.full_short_link && (
            <NotificationAlert message={data?.data?.result?.full_short_link} />
          )}
        <Button label='Submit' loading={isLoading} />
      </form>
    </div>
  );
};
