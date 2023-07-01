import React from 'react'
import {skills} from '../data'
const Skills = () => {
  return (
    <>
        {skills.map(({title,percentage},index)=>{
            return (
                <div className="progress_box" key={index}>
                    <div className="progras_circle">
                        
                    </div>
                    <h3 className="skills_title">
                        {title}
                    </h3>
                </div>
            )
        })}
    </>
  )
}

export default Skills