import React from 'react'

export const BuildCMSModules = modules =>
  modules.map(module => {
    const { Component, ...props } = module
    return <Component key={module.id} {...props} />
  })