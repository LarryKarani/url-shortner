import React from 'react'


interface ListProps {
    listData: [string]
}

const List: React.FC<ListProps> = ({listData}) => {
   console.log(listData, 'kskksk')
  return (
    <ul className='divide-y divide-gray-200'>
      {listData && listData.length > 0 ? listData?.map((item, index) => (
        <li key={index} className='px-4 py-4 sm:px-0 flex flex-row gap-4 cusor-pointer'>
          {item}
        </li>
      )): null}
    </ul>
  );
}

export default List