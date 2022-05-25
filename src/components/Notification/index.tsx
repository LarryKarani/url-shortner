import { CheckCircleIcon,  ClipboardCopyIcon} from '@heroicons/react/solid';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface NotificationProps {

    message? : string
}


const NotificationAlert: React.FC<NotificationProps> = ({message}) => {

 const [copied, setCopy] = useState<boolean>(false)
 
  return (
    <div className='rounded-md bg-green-50 p-4 my-4'>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <CheckCircleIcon
            className='h-5 w-5 text-green-400'
            aria-hidden='true'
          />
        </div>
        <div className='ml-3'>
          <p className='text-sm font-medium text-green-800'>{message}</p>
        </div>
        <div className='ml-auto pl-3'>
          <div className='-mx-1.5 -my-1.5'>
            <button
              type='button'
              className='inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600'
            >
              <span className='sr-only'>Copy</span>
              {message && (
                <CopyToClipboard text={message} onCopy={() => setCopy(true)}>
                  <ClipboardCopyIcon className='h-5 w-5' aria-hidden='true' />
                </CopyToClipboard>
              )}
              {copied && <span className='text-green-500'> Copied </span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationAlert;
