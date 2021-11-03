import React from 'react'

import * as S from './styles'
import { ReactComponent as Room} from '../assets/image/room.svg'

import { ReactComponent as Computer} from '../assets/image/computer.svg'
import { ReactComponent as Boards} from '../assets/image/boards.svg'
import { ReactComponent as Linux} from '../assets/image/linux.svg'

import { ReactComponent as Book0} from '../assets/image/got.svg'
import { ReactComponent as Book1} from '../assets/image/mundo-de-sofia.svg'
import { ReactComponent as Book2} from '../assets/image/as-intermitencias-da-morte.svg'
import { ReactComponent as Book3} from '../assets/image/o-codigo-da-vinci.svg'
import { ReactComponent as Book4} from '../assets/image/mulheres-que-correm-com-os-lobos.svg'
import { ReactComponent as Book5} from '../assets/image/o-pequeno-principe.svg'
import { ReactComponent as Book6} from '../assets/image/o-mal-estar-da-cultura.svg'
import { ReactComponent as Book7} from '../assets/image/um-ensaio-sobre-a-cegueira.svg'
import { ReactComponent as Book8} from '../assets/image/o-extraordinario.svg'
import { ReactComponent as Book9} from '../assets/image/o-quinze.svg'
import { ReactComponent as Book10} from '../assets/image/uma-breve-historia-do-tempo.svg'
import { ReactComponent as Book11} from '../assets/image/o-universo-numa-casca-de-noz.svg'
import { ReactComponent as Book12} from '../assets/image/frida.svg'
import { ReactComponent as Book13} from '../assets/image/sapiens.svg'

import { ReactComponent as Linkedin} from '../assets/image/linkedin.svg'
import { ReactComponent as GitHub} from '../assets/image/github.svg'
import { ReactComponent as Instagram} from '../assets/image/instagram.svg'

import { ReactComponent as Painel} from '../assets/image/painel.svg'
import { ReactComponent as Coffee} from '../assets/image/coffee.svg'
import { ReactComponent as Note} from '../assets/image/note.svg'
import { ReactComponent as Polaroid1} from '../assets/image/polaroid-one.svg'
import { ReactComponent as Polaroid2} from '../assets/image/polaroid-two.svg'
import { ReactComponent as Polaroid3} from '../assets/image/polaroid-three.svg'
import { ReactComponent as Polaroid4} from '../assets/image/polaroid-four.svg'
import { ReactComponent as Polaroid5} from '../assets/image/polaroid-five.svg'



import Paint from '../assets/image/paint.png'



export default function Home(){

    return (
                <S.Container>
                    <Room className='component' />
                    <S.Left>
                        <Painel className='painel' />
                        <Polaroid1 className='polaroid p-one' />
                        <Polaroid2 className='polaroid p-two' />
                        <Polaroid3 className='polaroid p-three' />
                        <Polaroid4 className='polaroid p-four' />
                        <Polaroid5 className='polaroid p-five' />
                        <a href='https://www.buymeacoffee.com/luanalessa' rel='noreferrer' target='_blank' ><Note className='note' />
                        <Coffee className='coffee' /></a>
                    </S.Left>
                    <S.Center>
                        <Boards className='boards' />
                        <Computer className='computer' />
                    </S.Center>
                    <S.Right>
                        <S.Shelf>
                            <img src={Paint} alt='' className='paint' />
                        </S.Shelf>
                        <S.Shelf>
                            <Linux className='linux' />
                        </S.Shelf>
                        <S.Shelf className='books'>
                            <Book0 className='book zero'/>
                            <Book1 className='book one'/>
                            <Book2 className='book two'/>
                            <Book3 className='book three'/>
                            <Book4 className='book four'/>
                            <Book5 className='book five'/>
                            <Book6 className='book six'/>
                            <Book7 className='book seven'/>
                            <Book8 className='book eight'/>
                            <Book9 className='book nine'/>
                            <Book10 className='book ten'/>
                            <Book11 className='book eleven'/>
                            <Book12 className='book twelve'/>
                            <Book13 className='book thirteen'/> 
                        </S.Shelf>
                        <S.Shelf className='social-midia'>
                            <a href='https://www.linkedin.com/in/luanalessa' rel='noreferrer' target='_blank' ><Linkedin className='social icon' /></a>
                            <a href='https://github.com/luanalessa' rel='noreferrer' target='_blank' ><GitHub className='social icon' /></a>
                            <a href='https://www.instagram.com/lessalsn' rel='noreferrer' target='_blank' ><Instagram className='social icon' /></a>
                        </S.Shelf>
                        </S.Right>
                </S.Container>
    )
}

