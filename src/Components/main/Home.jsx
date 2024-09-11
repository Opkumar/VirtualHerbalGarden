import React from "react";
import ImageSlider from "../utils/imageSlider";

const Home = () => {
  return (
    <>
      <div className="">
        <ImageSlider
          images={[
            "https://www.dabur.com/_default_upload_bucket/410/image-thumb__410__portalCarousel/Dabur%20Immunity%20Kit%20Ext%20Flip%20Rev@2x.10fc80cf.webp",
            "https://www.dabur.com/Banner/413/image-thumb__413__portalCarousel/Three%20wish@2x.5a82e2b1.webp",
            "https://www.dabur.com/Banner/412/image-thumb__412__portalCarousel/home%20banner3-Desk@2x.3477504e.webp",
          ]}
        />
      </div>
      <section className=" py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold  mb-12">
            Why Virtual Herbal Garden?
          </h3>
          <div className="grid justify-center mt-52">
            <div className="h-[450px] w-[450px] bg-[#66AA84] relative z-0 mb-[-225px] rounded-lg"></div>
            <div className="grid   gap-8 relative z-10 mt-[-384px]">
              <div className="text-center flex items-center gap-5 p-2 border w-[550px] rounded-md ml-[-350px] bg-white">
                <div className="text-green-800 mb-4 flex justify-center items-center">
                  <video
                    className="w-full max-w-xs rounded-lg shadow-lg"
                    autoPlay
                    muted
                  >
                    <source
                      src="https://res.cloudinary.com/dnnxdiqqt/video/upload/v1726071494/Screen_Recording_2024-09-05_at_12.15.30_AM_u40udz.mov"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="w-64">
                  <h4 className="text-2xl font-bold">3D model of Plants</h4>
                  <p>
                    Our website features interactive 3D models of
                    plants,allowing users to explore each plant from different
                    angles.These models provide a detailed and immersive
                    view,making it easier to learn about the structure and
                    characteristics of various medicinal plants.
                  </p>
                </div>
              </div>
              <div className="text-center flex items-center gap-5 p-2 border w-[550px] rounded-md ml-[300px] mr-[-300px] mt-[-100px] bg-white">
                <div className="text-green-800 mb-4">
                  <img
                    className="w-full h-[259px] max-w-xs rounded-lg shadow-lg"
                    src="https://hips.hearstapps.com/hmg-prod/images/a-set-of-colorful-potted-plants-on-a-patterned-area-royalty-free-image-1716493110.jpg"
                    alt=""
                  />
                </div>
                <div className="w-64">
                  <h4 className="text-2xl font-bold">
                    Comprehensive details about each plant
                  </h4>
                  <p>
                    Comprehensive details about each plant, including its
                    botanical name, common names, habitat, medicinal uses, and
                    methods of cultivation.
                  </p>
                </div>
              </div>
              <div className="text-center flex items-center gap-5 p-2 border w-[550px] rounded-md ml-[-350px] mt-[-100px] bg-white">
                <div className="text-green-800 mb-4">
                  <img
                    className="w-full h-[259px] max-w-xs rounded-lg shadow-lg"
                    src="https://res.cloudinary.com/hilnmyskv/image/upload/q_auto,f_auto/v1708025628/Algolia_com_Blog_assets/Featured_images/ecommerce/search-vs-browse-satisfying-user-intent/hszbuhgtfttzieosevjp.png"
                    alt=""
                  />
                </div>
                <div className="w-64">
                  <h4 className="text-2xl font-bold">
                    Search and Filter Options
                  </h4>
                  <p>
                    Advanced search functionality to easily locate specific
                    plants and filter them based on various criteria like
                    medicinal uses, region, and type.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-50 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Ministry of AYUSH</h3>
          <p className="mb-10 mt-[-20px]">
            Ministry of Ayush launched the Centrally Sponsored Scheme of
            National Ayush Mission (NAM) on 15.09.2014 for implementing through
            States/UTs. The National Ayush Mission (NAM) was approved for its
            further continuation till March, 2020 by Cabinet in 2017. As per the
            Department of Expenditure’s O.M. dated 10th January, 2020, the
            on-going Schemes were approved for interim extension up to
            31.03.2021. Union Cabinet also approved operationalization of 12,500
            Ayush Health and Wellness Centres (AHWCs) component under AYUSHMAN
            BHARAT for implementation through National Ayush Mission with a
            financial outlay of Rs. 3399.35 Crores for a period of 5 years up to
            2023-24.
          </p>
          <div className="flex justify-center mb-10">
            <img
              className=""
              src="https://kgis.ksrsac.in/ayush/images/ayush-icons-1.png"
              alt="Ayush logo"
            />
          </div>
          <div className="grid grid-cols-1  gap-8">
            <div className="p-6 bg-white rounded-md shadow-md flex">
              <div>
                <img
                  src="https://t3.ftcdn.net/jpg/05/68/27/22/360_F_568272234_QctXAHNIczaboEphLMQJ9fJ6c5WoSH9x.jpg"
                  alt="Plants"
                  className="w-full rounded-md min-w-96 "
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Ayurveda</h3>
                <p className="text-lg ml-10 mb-6 mr-10 leading-8 ">
                  Ayurveda is a traditional system of medicine that originated
                  in India thousands of years ago. It is based on the belief
                  that the mind and body are interconnected, and that
                  maintaining a balance between the two is essential for good
                  health.{" "}
                </p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md flex">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Yoga and Naturopathy
                </h3>
                <p className="text-lg mb-6 mr-10 leading-8 ">
                  Yoga is a mind-body practice that originated in ancient India
                  and has gained popularity worldwide as a form of exercise and
                  relaxation. It involves a postures, or asanas, that are
                  designed to promote flexibility, strength, and balance, as
                  well as breathing exercises and meditation to promote
                  relaxation and reduce{" "}
                </p>
              </div>
              <div>
                <img
                  src="https://kdham.com/wp-content/uploads/2021/06/Yoga-with-Naturopathy.jpg"
                  alt="Plants"
                  className="w-full rounded-md min-w-96 "
                />
              </div>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md flex">
              <div>
                <img
                  src="https://t4.ftcdn.net/jpg/03/36/29/23/360_F_336292383_KXyNHd0Xh7G0mUXm1OQvywS4VXyY4QkF.jpg"
                  alt="Plants"
                  className="w-full rounded-md min-w-96 "
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Unani</h3>
                <p className="text-lg ml-10 mb-6 mr-10 leading-8 ">
                  Unani medicine offers a holistic approach to health and
                  well-being and takes into account the physical, mental, and
                  emotional aspects of health. The diagnosis is based on the
                  examination of the patient's pulse, urine, and stool, as well
                  as their medical history and symptoms.{" "}
                </p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md flex">
              <div>
                <h3 className="text-3xl font-bold mb-6">Siddha</h3>
                <p className="text-lg mb-6 mr-10 leading-8 ">
                  Ayurveda and is believed to have been developed by the
                  Siddhars, or holy men of ancient India.Siddha medicine focuses
                  on maintaining a balance between the five elements of the
                  body: earth, water, fire, air, and ether. It believes that
                  good health is achieved when these elements are in balance and
                  disease occurs when there is an imbalance.{" "}
                </p>
              </div>
              <div>
                <img
                  src="https://virutchamclinic.com/wp-content/uploads/2017/06/siddha-870x450.jpg"
                  alt="Plants"
                  className="w-full rounded-md min-w-96 "
                />
              </div>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md flex">
              <div className="">
                <img
                  src="https://t3.ftcdn.net/jpg/01/98/32/64/360_F_198326436_IE9KDVfC7Dd0gpqNDLc7gP5GOdrzV6Bd.jpg"
                  alt="Plants"
                  className="w-full min-w-96  rounded-md"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Homeopathy</h3>
                <p className="text-lg ml-10 mb-6 mr-10 leading-8 ">
                  healthy person can also be used to treat similar symptoms in a
                  sick person.Homoeopathic remedies are made from natural
                  substances, such as plants, minerals, and animal products, and
                  are highly diluted to make them safe and non-toxic. The
                  remedies are chosen based on the individual's specific
                  symptoms, and the goal of treatment is to stimulate the body's
                  natural healing processes and restore balance and harmony to
                  the body. Healthy person can also be used to treat similar
                  symptoms in a sick person.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white p-20 pl-10">
        <div className="flex mx-auto   gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Decorate your home with plants
            </h3>
            <p className="text-lg mb-6 mr-10 leading-8 ">
              Plants are an easy way to transform your space, whether your style
              is high drama or subtle minimalism. Grouping iconic plants like
              Fidel, Robin, and Niccolia will inspire a sense of elegance and
              help create a microclimate.
            </p>
          </div>
          <div>
            <img
              src="https://nurserylive.com/cdn/shop/articles/House_Calls_Herman_Pelosi_Brooklyn_living_room_Gabriella_Herman.0_cc59416e-66f6-4ebd-a50c-91758c8c2e0d-979319.jpg?v=1679747969"
              alt="Plants"
              className="w-full rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
