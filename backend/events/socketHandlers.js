let currentPage = 1;

module.exports = (io, socket) => {
  socket.emit('page-changed', currentPage);

  socket.on('change-page', (pageNum) => {
    currentPage = pageNum;
    io.emit('page-changed', pageNum);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
};
