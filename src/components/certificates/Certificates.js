import React from 'react';
import { Image } from 'primereact/image';
// Used 'react-collapsible' package for creating collapsible bars
import Collapsible from 'react-collapsible';
import CCNA2 from "../../assets/certificates/CCNA2.jpeg";
import CCNA1 from "../../assets/certificates/CCNA1.jpeg";
import CCNA3 from "../../assets/certificates/CCNA3.jpeg";
import CISCOiot from "../../assets/certificates/CISCOiot.jpeg";
import createresume from "../../assets/certificates/createresume.jpeg";
import css3 from "../../assets/certificates/css3.jpeg";
import datastructure from "../../assets/certificates/datastructure.jpeg";
import editcv from "../../assets/certificates/editcv.jpeg";
import flipKart from "../../assets/certificates/flipKart.jpeg";
import html from "../../assets/certificates/html.jpeg";
import html5 from "../../assets/certificates/html5.jpeg";
import ideation from "../../assets/certificates/ideation.jpeg";
import integra from "../../assets/certificates/integra.jpeg";
import iot from "../../assets/certificates/iot.jpeg";
import javafeatures from "../../assets/certificates/javafeatures.jpeg";
import javaprogramming from "../../assets/certificates/javaprogramming.jpeg";
import javascript from "../../assets/certificates/javascript.jpeg";
import javase8 from "../../assets/certificates/javase8.jpeg";
import machinelearning from "../../assets/certificates/machinelearning.jpeg";
import python1 from "../../assets/certificates/python1.jpeg";
import pythonnetacad from "../../assets/certificates/pythonnetacad.jpeg";
import reskill from "../../assets/certificates/reskill.jpeg";
import yudiz from "../../assets/certificates/yudiz.jpeg";




const Certificates = () => {
  return (
    <>
        <h2 className='text-gray-50 text-4xl font-bold hover:underline ml-8' id='certificate'> Certificates</h2>
      <div
        className="project-card"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="2.5"
      >
        <div className="font-bold text-gray-50 mx-8">
          <Collapsible trigger="<--Click Me-->" >


            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={CCNA2} alt=""  preview />
              </div>
              {/* <div>
                <Image  class="h-auto max-w-full rounded-lg" src={CCNA2 } alt=""  preview />
              </div> */}
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={CCNA1}  alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={CCNA3}  alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={CISCOiot} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={createresume} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={css3} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={datastructure} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={editcv} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={flipKart} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={html} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={html5} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={ideation} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={integra} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={iot} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={javafeatures} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={javaprogramming} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={javascript} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={javase8} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={machinelearning} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={python1} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={pythonnetacad} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={reskill} alt=""  preview />
              </div>
              <div>
                <Image  class="h-auto max-w-full rounded-lg" src={yudiz} alt=""  preview />
              </div>
              
            </div>
            
          </Collapsible>
        </div>
      </div>
    </>
  );
};

export default Certificates;
