import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const useSocket = () => {
  const socket = io(process.env.REACT_APP_SOCKET_URL, { withCredentials: true });
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    socket.on('page-changed', (pageNum) => setPageNumber(pageNum));
    return () => socket.off('page-changed');
  }, [socket]);

  const goToPage = (pageNum) => {
    if (pageNum > 0) {
      setPageNumber(pageNum);
      socket.emit('change-page', pageNum);
    }
  };

  return { pageNumber, setPageNumber, goToPage };
};

export default useSocket;
