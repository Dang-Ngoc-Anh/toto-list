import { createRef, useEffect, useState } from "react"

export const useSroll = (data , ref)=>{
  const [dataScroll , setDataScroll] = useState(data);
  const [page , setPage] = useState(1);
  const [isLoading , setIsLoading] = useState(false);
  let isGreeting = false;
  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newData = data.slice(page * 5, (page + 1) * 5);
      setDataScroll(pre => [...pre , ...newData]);
      setIsLoading(false);
      setPage((prevPage) => prevPage + 1);
      // Đẩy thanh scroll lên
      window.scrollTo({
        top: ref.current.offsetTop - 20, // Điều chỉnh giảm độ cao để thanh scroll không che phủ hoàn toàn nội dung mới
        behavior: "smooth",
      });
    }, 1000); 
  };

    const infinityScroll = () =>{
        const {scrollHeight , clientHeight , scrollTop } = ref.current
        if((scrollHeight <= (clientHeight + scrollTop + 10)) && !isGreeting ){
          fetchData();
        }
      }

    useEffect(() =>{
        ref.current.addEventListener('scroll' , infinityScroll)
      },[isLoading])
  
    useEffect(()=> setDataScroll(data) , [data]);
    return {dataScroll ,setDataScroll ,isGreeting};
}
