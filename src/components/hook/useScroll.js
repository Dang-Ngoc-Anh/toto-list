import {useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { FETCH_REQUEST } from "../../Utils/utils";
let isGreeting = false;
export const useSroll = (data , ref)=>{
  const [dataScroll , setDataScroll] = useState(data);
  const page = useRef(1);
  const [isLoading , setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchData = () => {
    setIsLoading(true);
    page.current = page.current+1
    setTimeout(() => {
      dispatch({type:FETCH_REQUEST, payload:{page:page.current, limit:10}});
      setDataScroll(pre => [...pre , ...data]);
      setIsLoading(false);
      isGreeting = false;
      // Đẩy thanh scroll lên
      window.scrollTo({
        top: ref.current.offsetTop - 10, // Điều chỉnh giảm độ cao để thanh scroll không che phủ hoàn toàn nội dung mới
        behavior: "smooth",
      });
    }, 1000); 
  };

    const infinityScroll = () =>{
        const {scrollHeight , clientHeight , scrollTop } = ref.current
        if((scrollHeight <= (clientHeight + scrollTop + 10)) && !isGreeting ){
          isGreeting = true;
          fetchData();
        }
      }

    useEffect(() =>{
        ref.current.addEventListener('scroll' , infinityScroll);
        return ()=> {
           ref.current.removeEventListener('scroll' , infinityScroll);
        }
      },[isLoading])
  
    useEffect(()=> setDataScroll(data) , [data]);
    return {dataScroll ,setDataScroll ,isGreeting};
}
