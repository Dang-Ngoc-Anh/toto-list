const InfiniteScroll = ()=>{
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []); // Run only once on component mount

  const fetchData = () => {
    if (isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      const newData = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);
      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
      setPage((prevPage) => prevPage + 1);
    }, 1000); 
  };

  const handleScroll = () => {
    if (isLoading) return;

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <div>
      <div style={{ columnCount: 3, columnGap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {data.map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))}
      </div>
      {isLoading && <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>}
    </div>
  );
};

export default InfiniteScroll