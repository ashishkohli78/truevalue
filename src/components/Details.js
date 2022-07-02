import React from 'react'
import { useRecoilValue,selector } from 'recoil'
import {useParams} from "react-router-dom"
import {userState} from "../components/UserState"
function Details() {
    
      const data = useRecoilValue(userState);
      console.log(data)
      const params = useParams()
      const filterData = data.filter((ele)=>params.first_name===ele.first_name).map((ele)=>{return ele})
      console.log(filterData)
  return (
    <div>
      
    </div>
  )
}

export default Details
