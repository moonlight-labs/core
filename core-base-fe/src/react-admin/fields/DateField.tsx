
import get from 'lodash/get'
import { DateFieldProps, useRecordContext } from 'react-admin'

export const DateField = (props: DateFieldProps) => {
  const record = useRecordContext()

  const { source } = props

  if (!record || !source) return null

  const date = get(record, source)

  return (
    // Alt version might be simpler:
    <DateField title={date} {...props} />
  )
}
