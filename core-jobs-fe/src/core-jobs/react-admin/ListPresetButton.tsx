// import { Button, Menu, MenuItem, Tooltip, IconButton } from '@material-ui/core';
import { Button } from '@mui/material'
import { ReactNode } from 'react'
import { FilterPayload, SortPayload, useListContext } from 'react-admin'
// import { BrowserRouter, Link, useNavigate } from 'react-router-dom';
// import queryString from 'query-string';

const ListPresetButton = ({
  sortSpec,
  label,
  filterSpec,
}: {
  sortSpec: SortPayload
  label: string | ReactNode
  filterSpec: FilterPayload
}) => {
  const { sort, setSort, filterValues, setFilters } = useListContext()

  // // rely on the translations to display labels like 'Sort by sales descending'
  // const translate = useTranslate();

  const handleChangeSort = (event: any) => {
    const field = event.currentTarget.dataset.sort
    // setSort(field, (field === sort.field ? inverseOrder(sort.order) : 'ASC'));
    setFilters(filterSpec, [], false)
    setSort(sortSpec)
  }

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        sx={{ color: 'grey' }}
        size="small"
        onClick={handleChangeSort}
      >
        {label}
      </Button>
    </>
  )
}

// const inverseOrder = (sort: string) => (sort === 'ASC' ? 'DESC' : 'ASC');

// const SortFilterButton = ({
//   sortSpec,
//   label,
//   filterSpec,
// }: {
//   sortSpec: SortPayload
//   label: string | ReactNode
//   filterSpec: FilterPayload
// }) => {
//   const record = useRecordContext();
//   const refresh = useRefresh()
//   // console.log('record = ', record )
//   // const translate = useTranslate();
//   const dataProvider = useDataProvider();
//   // const navigate = useNavigate();
//     // const { sort, setSort, filterValues, setFilters } = useListContext()
//     // setFilters()
//     // console.log(JSON.stringify({ status: ['errored', 'failed'] }))
//   return (
//     <BrowserRouter>
//       <Button
//           component={Link}
//           sx={{color: 'grey'}}
//           // onClick={()=>{refresh()}}
//           to={{
//               pathname: '/Job',
//               // search: `filter=${JSON.stringify(filterSpec)}`,
//               search: queryString.stringify({
//                 page: 1,
//                 perPage: 25,
//                 order: 'DESC',
//                 filter: JSON.stringify(filterSpec),
//                 sort: JSON.stringify(sortSpec),
//             }),
//             // http://localhost:5173/Job?filter=%7B%22status%22%3A%5B%22errored%22%2C%22failed%22%5D%7D&order=DESC&page=1&perPage=25&sort=%7B%22field%22%3A%22priority%22%2C%22order%22%3A%22ASC%22%7D
//               // http://localhost:5174/#/Job?displayedFilters=%5B%5D&filter=%7B%22status%22%3A%5B%22errored%22%2C%22failed%22%5D%7D&order=ASC&page=1&perPage=10&sort=run_at
//             }}
//       >
//           {label} ;
//       </Button>
//       </BrowserRouter>
//         // <Button
//         // onClick={()=>{
//         //   navigate(`/Job`);
//         // //   dataProvider.getList('Job', {
//         // //     filter: { filterSpec },
//         // //     pagination: { page: 1, perPage: 10 },
//         // //     sort: { field: 'run_at', order: 'DESC' },
//         // // });
//         // }}
//         // >
//         //   {label}
//         // </Button>
//   )
// };

export default ListPresetButton