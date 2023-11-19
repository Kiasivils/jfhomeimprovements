import Gallery from './gallery/gallery.js'
import house1 from '../images/House1.webp';
import house2 from '../images/House2.jpeg';
import trim from '../images/trim1.webp';


const OurWork = () => {
   const galleryImages = [
       {
           img: house1
               },
       {
           img: house2
       },
       {
           img: trim
       },


   ]
 return (
   <><div className='ourwork-header' id='ourwork'>
       <div className='ourwork-content'>
         <h1>Our Work</h1>
         <h2>Here are some of our recent building projects. Please feel free to use them for inspiration.</h2>
     </div>
     <Gallery
             galleryImages={galleryImages} />
   </div>
   </>
 )
}

export default OurWork; 