// import React from 'react'

// import CommentIcon from '@mui/icons-material/Comment'
// import { Button } from '@mui/material'

// import DrawerList from './DrawerList'

// export const ShowCommentsButton= ({
//   data: any
//   resource: string
//   resourceTransform?: (resource: string) => string
// }:{ data, resource, resourceTransform }) => {
//   const [hidden, setHidden] = React.useState<boolean>(true)

//   const handleClose = () => {
//     setHidden(true)
//   }

//   const handleOpen = () => {
//     setHidden(false)
//   }

//   return (
//     <>
//       <Button color="primary" onClick={handleOpen}>
//         <CommentIcon />
//         <span style={{ paddingLeft: '0.5em' }}>Show Comments</span>
//       </Button>
//       <DrawerList
//         resource={resourceTransform ? resourceTransform(resource) : resource}
//         resourceId={data?.id}
//         open={!hidden}
//         handleClose={handleClose}
//       />
//     </>
//   )
// }
