import React, { useState } from 'react' 

import * as S from './styles'
import Polaroid from '../Polaroid'

import polaroid1 from '../../assets/image/pictures/coletivo-1.jpeg'
import polaroid3 from '../../assets/image/pictures/coletivo-3.png'
import polaroid4 from '../../assets/image/pictures/coletivo-4.jpeg'

import polaroid5 from '../../assets/image/pictures/projeto-sou-da-paz.jpg'

import polaroid6 from '../../assets/image/pictures/agentes-da-alegria-1.jpg'
import polaroid7 from '../../assets/image/pictures/agentes-da-alegria-2.jpeg'

import polaroid8 from '../../assets/image/pictures/fortaleza.jpeg'




const pictures = [
  {
    src: polaroid1,
    title:'Contação de histórias',
    legend: '@coletivodonzelinha'
  },
  {
    src: polaroid3,
    title:'Café, Arte & Mulher',
    legend: '@coletivodonzelinha'
  },
  {
    src: polaroid4,
    title:'Setembro de todas as cores',
    legend: '@coletivodonzelinha'
  },
  {
    src: polaroid5,
    title:'Pintura Coletiva',
    legend: '@projetosoudapaz'
  },
  {
    src: polaroid6,
    title:'Lar Amigos de Jesus',
    legend: '@agentesdaalegria'
  },
  {
    src: polaroid7,
    title:'Lar Amigos de Jesus',
    legend: '@agentesdaalegria'
  },
  {
    src: polaroid8,
    title:'Fortaleza',
    legend: '#meupaisceara'
  }
]

export default function Galery({ setGalery, children }) {
    const [ counter, setCounter] = useState(0)

    const nextPicture = () =>{
      if(counter === pictures.length - 1) setCounter(0);
      else setCounter(counter + 1)

      console.log(counter)
    }

    const previousPicture = () =>{
      if(counter === 0) setCounter(pictures.length - 1);
      else setCounter(counter - 1)
      console.log(counter)

    }


    return (
      <>
            <S.Button onClick={previousPicture}><i className='bx bxs-chevron-left-circle'></i></S.Button>
            <Polaroid 
              src={pictures[counter].src}
              title={pictures[counter].title}
              legend={pictures[counter].legend}
              ></Polaroid>
            <S.Button onClick={nextPicture}><i className='bx bxs-chevron-right-circle'></i></S.Button>
    </>
    )
  }
  
  
  
