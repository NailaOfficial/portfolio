import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-col-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className=' text-4xl md:text-5xl'>Technologies i work with</h2>
          <p className='text-gray-500 pt-2'>
          I have a solid foundation in web development, specializing in creating responsive and dynamic web applications. Proficient in HTML, CSS, and JavaScript, I am skilled in leveraging frameworks such as React and Next.js to build user-friendly interfaces. My expertise extends to TypeScript for enhanced code quality and maintainability, as well as Tailwind CSS for efficient styling. I am passionate about exploring emerging technologies, including Web 3.0 and cloud-native computing, to deliver innovative solutions that enhance user experiences and drive engagement.
          </p>
        </div>

      </div>
      <div>
        <div className='grid grid-cols-2 text-fuchsia-700 text-3xl sm:text-4xl'>
          <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">Typescript</h2>
            <h2 data-aos="zoom-in-up">React.js</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>
          </div>
          <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">Tailwind</h2>
            <h2 data-aos="zoom-in-up">CSS</h2>
            <h2 data-aos="zoom-in-up">Node.js</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills