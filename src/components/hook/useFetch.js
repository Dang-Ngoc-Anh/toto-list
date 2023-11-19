import { useEffect } from "react"

export const useFetch = (data)=>{
    useEffect(() => data , [data])
}