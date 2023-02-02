import React, {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const Images=()=>{
    const[images,setImages]=useState<any[]>([])
    const[count,setCount]=useState(30)
    const[start,setStart]=useState(1)

    useEffect(()=>{
        // @ts-ignore
        // @ts-ignore
        async function getImages(){
            const {data}=await axios.get(`https://infinite-scroll-production-b1d8.up.railway.app/api/photos?count=${count}&start=${start}`)
            console.log(data.results)
            setImages(data.results)

        }
        getImages()
    },[])
    function fetchImages(){
        setStart(start+1)
        setCount(count+30)
        axios.get(`https://infinite-scroll-production-b1d8.up.railway.app/api/photos?count=${count}&start=${start}`)
        .then(res=>
            {console.log(res)
            setImages(images.concat(res.data.results))})
        console.log(images)
    }
    // @ts-ignore
    // @ts-ignore
    return(
        <div className='images'>
            <InfiniteScroll
                dataLength={images?.length}
                next={fetchImages}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                >
                {images && images.map((i)=>
                    <img className='single-photo' src={i.urls.thumb} alt={"img"}/>
                )}
            </InfiniteScroll>
        </div>
    )
}
export default Images