import React from 'react'

import { BuildCMSModules } from 'hoc/BuildCMSModules'

const cmsData = [
  {
    id: 1,
    Component: 'ProductCard',
    title: 'Yellow dress',
    body: 'Summer collection dress'
  },
  {
    id: 2,
    Component: 'ProductCard',
    title: 'Red t-shirt',
    body: 'Slim fit regular t-shirt'
  }
]

// const mapDataToComponents = modules => {
//   modules.map(module => {
//     // map Component: 'Post' to Post

//     module.Component = module.Component.replace(/\'/g, "")
//   })
//   return modules
// }

// const newData = mapDataToComponents(cmsData)
// console.log(newData)


export default class CategoriesPage extends React.Component {
  render() {
    // mapDataToComponents(cmsData)
    return (
      <div className='categories'>
        <h2>Categories</h2>
        {BuildCMSModules(cmsData)}
      </div>
    )
  }
}