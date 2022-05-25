export const useLocalStorage: any = () => {
  const setValue = (key: string, value: any) => {
    console.log(value, 'oooo')
    localStorage.setItem(key, JSON.stringify(value));
  };

  const readValue = (key: string) => {
    const data = localStorage.getItem(key);
    if(data && typeof data === 'string'){
       return JSON.parse(data);
    }
    else {
      return []
    }
   
  };

  const clear = () => {
    localStorage.clear();
  };

  return [readValue, setValue, clear];
};
