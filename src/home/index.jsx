import React, { useState } from 'react'
import Modal from '../components/Modal'
import Galery from '../components/Galery'

import Computer from '../components/Computer'

import * as S from './styles'
import { ReactComponent as Room} from '../assets/image/icons/room.svg'

import { ReactComponent as Monitor} from '../assets/image/icons/computer.svg'
import { ReactComponent as Boards} from '../assets/image/icons/boards.svg'
import { ReactComponent as Linux} from '../assets/image/icons/linux.svg'

import { ReactComponent as Book0} from '../assets/image/icons/got.svg'
import { ReactComponent as Book1} from '../assets/image/icons/mundo-de-sofia.svg'
import { ReactComponent as Book2} from '../assets/image/icons/as-intermitencias-da-morte.svg'
import { ReactComponent as Book3} from '../assets/image/icons/o-codigo-da-vinci.svg'
import { ReactComponent as Book4} from '../assets/image/icons/mulheres-que-correm-com-os-lobos.svg'
import { ReactComponent as Book5} from '../assets/image/icons/o-pequeno-principe.svg'
import { ReactComponent as Book6} from '../assets/image/icons/o-mal-estar-da-cultura.svg'
import { ReactComponent as Book7} from '../assets/image/icons/um-ensaio-sobre-a-cegueira.svg'
import { ReactComponent as Book8} from '../assets/image/icons/o-extraordinario.svg'
import { ReactComponent as Book9} from '../assets/image/icons/o-quinze.svg'
import { ReactComponent as Book10} from '../assets/image/icons/uma-breve-historia-do-tempo.svg'
import { ReactComponent as Book11} from '../assets/image/icons/o-universo-numa-casca-de-noz.svg'
import { ReactComponent as Book12} from '../assets/image/icons/frida.svg'
import { ReactComponent as Book13} from '../assets/image/icons/sapiens.svg'

import { ReactComponent as Linkedin} from '../assets/image/icons/linkedin.svg'
import { ReactComponent as GitHub} from '../assets/image/icons/github.svg'
import { ReactComponent as Instagram} from '../assets/image/icons/instagram.svg'

import { ReactComponent as Painel} from '../assets/image/icons/painel.svg'
import { ReactComponent as Coffee} from '../assets/image/icons/coffee.svg'
import { ReactComponent as Note} from '../assets/image/icons/note.svg'
import { ReactComponent as Polaroid1} from '../assets/image/icons/polaroid-one.svg'
import { ReactComponent as Polaroid2} from '../assets/image/icons/polaroid-two.svg'
import { ReactComponent as Polaroid3} from '../assets/image/icons/polaroid-three.svg'
import { ReactComponent as Polaroid4} from '../assets/image/icons/polaroid-four.svg'
import { ReactComponent as Polaroid5} from '../assets/image/icons/polaroid-five.svg'



import joker from '../assets/image/icons/paint.png'



export default function Home(){
    const [modal, setModal] = useState(false)
    const [type, setType] = useState(false)


    return (
                <S.Container>
                    { modal && (
                        <Modal setModal={setModal} type='Computer'>
                           { type ==='Computer' ? (<Computer setModal={setModal}/>) : null}
                           { type ==='Galery' ? (<Galery setModal={setModal}/>) : null}
                           { type ==='Painting' ? (<S.Painting/>) : null}

                        </Modal>)}
                                
                    <Room className='component' />
                    <S.Left>
                        <Painel className='painel' />
                        <Polaroid1 
                            onClick={() => {
                                setType('Galery')
                                setModal(true)}}
                            className='polaroid p-one clickable' 
                        />
                        <Polaroid2 
                            onClick={() => {
                                setType('Galery')
                                setModal(true)}}
                                className='polaroid p-two clickable' 
                        />
                        <Polaroid3 
                            onClick={() => {
                                setType('Galery')
                                setModal(true)}}
                                className='polaroid p-three clickable' 
                        />
                        <Polaroid4 
                            onClick={() => {
                                setType('Galery')
                                setModal(true)}}
                                className='polaroid p-four clickable' 
                        />
                        <Polaroid5 
                            onClick={() => {
                                setType('Galery')
                                setModal(true)}}                            
                            className='polaroid p-five clickable' 
                        />
                            
                        <a href='https://www.buymeacoffee.com/luanalessa' rel='noreferrer' target='_blank' ><Note className='note clickable' />
                        <Coffee className='coffee clickable' /></a>
                    </S.Left>
                    <S.Center>
                        <Boards className='boards clickable' />
                        <Monitor className='computer clickable'  
                            onClick={() => {
                                setType('Computer')
                                setModal(true)}}
                        />
                    </S.Center>
                    <S.Right>
                        <S.Shelf>
                            <img 
                                src={joker} 
                                alt='' 
                                className='paint clickable'
                                onClick={() => {
                                    setType('Painting')
                                    setModal(true)}}
                                />
                        </S.Shelf>
                        <S.Shelf>
                        <a href='https://ubuntu.com/download' rel='noreferrer' target='_blank' ><Linux className='linux clickable' /></a>
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
                            <a className='' href='https://www.linkedin.com/in/luanalessa' rel='noreferrer' target='_blank' ><Linkedin className='social icon clickable' /></a>
                            <a href='https://github.com/luanalessa' rel='noreferrer' target='_blank' ><GitHub className='social icon clickable' /></a>
                            <a href='https://www.instagram.com/lessalsn' rel='noreferrer' target='_blank' ><Instagram className='social icon clickable' /></a>
                        </S.Shelf>
                        </S.Right>
                </S.Container>
    )
}

