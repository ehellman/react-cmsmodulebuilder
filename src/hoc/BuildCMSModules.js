import React from 'react'

// try this:
// import all components
// map string data to components
// return new data object (store?)

export const BuildCMSModules = modules =>
  modules.map(module => {
    const { Component, ...props } = module
    return <Component key={module.id} {...props} />
  })