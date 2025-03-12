import React from 'react'
import Category from '../components/Category'
import { CarouselDefault } from '../components/Carousel'
import Herosectin from '../components/Herosectin'
import Todaysdeal from '../components/Todaysdeal'
import Relatedprdcts from '../components/Relatedprdcts'
import Televisions from '../components/Televisions'
import Headphones from '../components/Headphones'


function Homepage() {
  return (
    <div><Category/>
    
    <Herosectin/>
    <Todaysdeal/>
    <Relatedprdcts/>
    <Televisions/>
    
    <Headphones/>
    </div>
  )
}

export default Homepage