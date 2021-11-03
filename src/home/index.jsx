import React from 'react'

import * as S from './styles'
import { ReactComponent as Room} from '../assets/image/room.svg'

import { ReactComponent as Computer} from '../assets/image/computer.svg'
import { ReactComponent as Boards} from '../assets/image/boards.svg'
import { ReactComponent as Linux} from '../assets/image/linux.svg'

import Paint from '../assets/image/paint.png'



export default function Home(){
  
    return (
                <S.Container>
                    <Room className='component' />
                    <S.Left></S.Left>
                    <S.Center>
                        <Boards className='boards' />
                        <Computer className='computer' />
                    </S.Center>
                    <S.Right>
                        <img src={Paint} alt='' className='paint' />
                        <Linux className='linux' />
                        </S.Right>
                </S.Container>
    )
}

