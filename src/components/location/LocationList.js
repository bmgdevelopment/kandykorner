import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

// * the term effect is reference changing info outside of the function
// when using useEffect(), this function will create a side effect or outside
// effect. 

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext) //the function using the LocationContext deconstructs the arguments content/context

    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
        getLocations()
    }, [])

    return (
        <section className="locations">
        {
            locations.map(location => {
                return (
                    <div className="location" id={`location--${location.id}`}>
                        <div className="location__name">
                            Name: <b>{ location.name }</b>
                        </div>
                        <div className="location__address">
                            Location: {location.address}
                        </div>
                        <div className="location__sqft">
                            Square Footage: {location.sqFt}
                        </div>
                        <div className="location__handicap">
                            Handicap Accessible? : {location.handicap}
                        </div>
                    </div>
                )
            })
        }
        </section>
    )
}