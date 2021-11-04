import React, {useState} from 'react';

import * as S from './styles'

export default function Clock(){
    const [month] = useState(new Date().toLocaleString('default', { month: 'short' }))
    const [day] = useState(new Date().getDay())
   

    // const [time, setTime] = useState(setInterval(() => {
    //     setTime(new Date().toLocaleTimeString(),1000)
    // }));
    
    return <S.Label> { month } { day } {  } </S.Label>
}