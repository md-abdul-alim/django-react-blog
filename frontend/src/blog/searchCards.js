import React from 'react'


export default function SearchCards ({solutions}){

    return(
        <>

            {/* <a href='www.facebook.com' style={{color: "red", display: "block"}}>{solution.id}-{solution.question}</a> */}
            {/* <span>{solutions}</span> */}
            {solutions.map(solution => (
                <a href='facebook.com' style={{color: "red", display: "block"}}>{solution.id}-{solution.question}</a>
            
            ))}
        </>
    )
}