import { CustomButtonDrawer, DrawerWidth } from '@moonlight-labs/core-base-fe'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import IconButton from '@mui/material/IconButton'
import { Box, MenuItem } from '@mui/material'
import Menu from '@mui/material/Menu'
import { useState } from 'react'
import { FieldProps, useRecordContext } from 'react-admin'
import { DeleteMenuItem } from './DeleteMenuItem'
import { UpdateMenuItem } from './UpdateMenuItem'
import { EditJob } from './edit'

// export const JobActions = ({ label = 'Actions' }: { label?: string; }) => {
//   const record = useRecordContext();

//   if (!record) return null;

//   return (
//     <Box
//       className="show-on-hover"
//       sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
//     >
//       {record.actions.includes('retry') && (
//         <UpdateButton label="Retry" data={{}} />
//       )}
//       <CustomButtonDrawer
//         label=" "
//         drawerProps={{ title: 'Edit Jobs' }}
//         // sx={{ display: 'inline-flex' }}
//         mode="edit"
//         drawerWidth={DrawerWidth.Medium}
//         editProps={{ actions: <JobsEditActions /> }}
//       >
//         <EditJob />
//       </CustomButtonDrawer>
//       <DeleteWithConfirmButton color="primary" label="" />

//     </Box>
//   );
// };

const ITEM_HEIGHT = 48

function deleteJob() {
  alert('delete job with confirmation')
}

function retryJob() {
  alert('retry job')
}

export const JobActions = (props: FieldProps) => {
  const record = useRecordContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [openDrawer, setOpenDrawer] = useState(false)

  function viewJob() {
    handleCloseMenu()
    setOpenDrawer(true)
  }

  const handleClickActions = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation
    setAnchorEl(event.currentTarget)
    return false
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <Box display="flex">
      <CustomButtonDrawer
        mode="edit"
        drawerProps={{ title: 'Job Details' }}
        // sx={{ display: 'inline-flex' }}
        openDrawer={openDrawer}
        label={'View'}
        drawerWidth={DrawerWidth.Medium}
        onDrawerClose={() => setOpenDrawer(false)}
        clickableComponent={
          <IconButton aria-label="view" id="view-button" sx={{ display: 'none' }}>
            <VisibilityOutlinedIcon />  
          </IconButton>
        }
      >
        <EditJob />
      </CustomButtonDrawer>

      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClickActions}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem key={'view'} onClick={viewJob}>
          View
        </MenuItem>
        <UpdateMenuItem
          label={record.status.includes('scheduled') ? 'Run Now' : 'Retry'}
          disabled={record.status.includes('completed')}
          data={{ status: 'retry!' }}
          onClick={handleCloseMenu}
        />
        <DeleteMenuItem title="test" label="Delete" onClick={handleCloseMenu} />
      </Menu>
    </Box>
  )
}
