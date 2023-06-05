import React, { useContext, useEffect } from 'react';
import './listList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ListsContext } from '../../context/listContext/ListsContext';
import { getLists, deleteList } from '../../context/listContext/apiCalls';

export default function ListList() {
  const { lists, dispatch } = useContext(ListsContext);

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
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='productListDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='productList'>
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
}