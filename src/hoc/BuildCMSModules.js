import React from 'react'

// Import all the components that can be used from within the CMS
const MODULES = {
  ProductCard: require('components/ProductCard').default
}

export const BuildCMSModules = modules =>
  modules.map(module => {
    const { Component, ...props } = module
    const CMSComponent = MODULES[Component]
    return <CMSComponent key={module.id} {...props} />
  })