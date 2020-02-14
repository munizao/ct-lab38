jest.mock('react-redux', () => {
  return {
    __esModule: true,
    useDispatch: jest.fn(() => (action) => {}),
    useSelector: jest.fn((selector) => selector({ coffees: 0, snacks: 0, naps: 0, studies: 0 })),
  };
});
