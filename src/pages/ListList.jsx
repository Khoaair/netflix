import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListsContext } from '../context/listContext/ListContext';
import { getLists, deleteList } from '../context/listContext/apiCalls';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';

const ListList = () => {
  const { lists, dispatch } = useContext(ListsContext);

  console.log(lists);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = id => {
    deleteList(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'genre', headerName: 'Genre', width: 150 },
    { field: 'type', headerName: 'Type', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link
              to={{
                pathname: `/list/${params.row._id}`,
                state: { list: params.row },
              }}
            >
              <button className='rounded-[10px] px-[10px] py-[5px] bg-[#3bb077] text-white cursor-pointer mr-5'>
                Edit
              </button>
            </Link>
            <DeleteOutline
              className='bg-red-500 cursor-pointer'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='flex-[4]'>
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8, 16, 24]}
        checkboxSelection
        getRowId={r => r._id}
      />
    </div>
  );
};
export default ListList;
