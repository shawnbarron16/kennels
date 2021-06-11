import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useHistory } from "react-router-dom"
import "./Animal.css"


export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext)
  
  const history = useHistory()
  
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()
  }, [])


  return (
    <>
    <h2>Animals</h2>
    <button onClick={
      () => history.push("./animals/create")
    }>
      Add Animal
    </button>
    <section className="animals">
      {
        animals.map(animal => {
          return (
            <div className="animal" key={animal.name} id={`animal--${animal.id}`}>
              <div className="animal__name">
                Name: { animal.name }
              </div>
              <div className="animal__breed">
                Breed: { animal.breed }
              </div>
            </div>
          )
        })
      }
    </section>
      </>
  )
}