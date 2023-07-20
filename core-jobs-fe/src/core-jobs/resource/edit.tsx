import {
  Edit,
  Labeled,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from 'react-admin'

import { TimeAgoField } from '@moonlight-labs/core-base-fe'

import Grid from '@mui/material/Grid'

const ErrorPanel: React.FC = () => {
  const record = useRecordContext()

  if (!record || !record.error_count) return null

  console.log(record)

  return (
    <>
      <div>
        <Labeled label="Error Count">
          <TextField source="error_count" />
        </Labeled>
      </div>
      <div>
        <Labeled label="Last Error Message">
          <TextField source="last_error_message" />
        </Labeled>
      </div>
      <div>
        <Labeled label="Error Stacktrace">
          <TextField source="last_error_backtrace" />
        </Labeled>
      </div>
    </>
  )
}

// const EditToolbar = (props: any) => (
//   <Toolbar {...props}>
//     <SaveButton />
//   </Toolbar>
// )

export const EditJob = (props: any) => {
  return (
    <Edit>
      <SimpleShowLayout>
        {/* <TextField source="jobClass" /> */}
        <TextField source="type" label="Job" />

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div>
              <Labeled label="ID">
                <TextField source="id" />
              </Labeled>
            </div>
            <div>
              <Labeled label="Status">
                <TextField source="status" />
              </Labeled>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <Labeled label="Queue">
                <TextField source="queue" />
              </Labeled>
            </div>
            <div>
              <Labeled label="Priority">
                <TextField source="priority" />
              </Labeled>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <Labeled label="Run At">
                <TimeAgoField source="run_at" />
              </Labeled>
            </div>
            <div>
              <Labeled label="Finished At">
                <TimeAgoField source="finished_at" />
              </Labeled>
            </div>
            <div>
              <Labeled label="Expired At">
                <TimeAgoField source="expired_at" />
              </Labeled>
            </div>
          </Grid>
        </Grid>

        <TextField source="args" />

        <TextField source="data" />

        <ErrorPanel />
      </SimpleShowLayout>
    </Edit>
  )
}
