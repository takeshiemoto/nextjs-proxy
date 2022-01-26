import { useEffect, useState } from 'react';

const isDev = false;

const fetchMessage = async (): Promise<{ message: string }> => {
  const endpoint = isDev ? '/backend' : '/api/me';
  return fetch(endpoint)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export function Index() {
  const [message, setMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchMessage().then((res) => setMessage(res.message));
  }, []);

  if (!message) {
    return <div>Loading...</div>;
  }

  return <div>{message}</div>;
}

export default Index;
