import { div } from "motion/react-client";
import React from "react";
import ReactCardCarousel from "react-card-carousel";

const Testimonial = () => {
  const CARD_STYLE = {
    height: "300px",
    width: "100%",
    maxWidth: "600px",
    padding: "20px",
    textAlign: "center",
    background: "#FFFFFF",
    color: "#247ba0",
    fontSize: "16px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  };

  const testimonialData = [
    {
      title: "Amazing Service!",
      description: "This platform has transformed the way I look for jobs. I secured my dream job effortlessly!",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Jane Doe",
      profession: "Software Engineer",
    },
    {
      title: "Great Experience!",
      description: "I found my dream job within weeks of signing up. The platform is truly a game-changer.",
      image: "https://randomuser.me/api/portraits/men/81.jpg",
      name: "John Smith",
      profession: "Product Manager",
    },
    {
      title: "Highly Satisfied!",
      description: "The platform is intuitive and easy to use. Customer support was top-notch throughout.",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "Michael Johnson",
      profession: "UX Designer",
    },
    {
      title: "Best Career Move!",
      description: "I never thought job hunting could be this seamless. Highly recommended for professionals.",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      name: "Emily Brown",
      profession: "Marketing Specialist",
    },
    {
      title: "Exceptional Support!",
      description: "The team was very responsive and helped me tailor my applications effectively. Thanks a ton!",
      image: "https://randomuser.me/api/portraits/men/82.jpg",
      name: "David Wilson",
      profession: "Data Analyst",
    },
    {
      title: "Superb Platform!",
      description: "I landed a fantastic internship opportunity through this platform. It's a life-changer!",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Chris Johnson",
      profession: "Intern",
    },
    {
      title: "Smooth Experience!",
      description: "Everything was so smooth and efficient. I can't recommend this platform enough!",
      image: "https://randomuser.me/api/portraits/women/78.jpg",
      name: "Sophia Taylor",
      profession: "HR Manager",
    },
    {
      title: "Highly Effective!",
      description: "This platform connects you with top-notch companies. I'm so happy with the results!",
      image: "https://randomuser.me/api/portraits/men/84.jpg",
      name: "James Anderson",
      profession: "Financial Advisor",
    },
    {
      title: "A Game-Changer!",
      description: "Thanks to this platform, I found multiple opportunities in my field. Truly outstanding!",
      image: "https://randomuser.me/api/portraits/women/80.jpg",
      name: "Isabella Martin",
      profession: "Graphic Designer",
    },
  ];
  

  return (
    <div className="w-full md:w-11/12 mx-auto  px-2 py-8 md:pt-20 ">
      {/* Header */}
      <div className="text-center h-[400px]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b98e0]">What Our Clients Say</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">Hear from some of the amazing people we've helped.</p>
      </div>

      {/* Carousel */}
      <ReactCardCarousel autoplay={true} autoplay_speed={3000} className="rounded-3xl bg-transparent">
       
        {testimonialData.map((item, index) => (
      
      <div className="p-1 md:p-2 rounded-lg bg-blue-200">

<div
         key={index}
        
         className="flex flex-col  justify-around h-[400px] md:h-[300px] w-full  mx-auto md:max-w-[600px] p-5 text-center bg-white text-[#247ba0] text-base rounded-3xl shadow-2xl "
       >
         {/* Title and Description */}
         <h3 className="text-lg md:text-xl font-semibold text-start">{item.title}</h3>
         <p className="text-sm md:text-base text-start mt-2">{item.description}</p>
       
         <div className="mt-4 flex flex-col md:flex md:flex-row items-center justify-start w-full gap-4">
           <img
             src={item.image}
             alt={item.name}
             className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-md"
           />
           <div className="mt-2 text-center">
             <p className="font-bold text-base md:text-lg">{item.name}</p>
             <p className="text-sm text-gray-800">{item.profession}</p>
           </div>
         </div>
         {/* Image and User Info */}
       </div>
        </div>

     
       
        ))}
      </ReactCardCarousel>
    </div>
  );
};

export default Testimonial;
