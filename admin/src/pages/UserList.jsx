import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UsersContext } from '../context/userContext/UserContext';
import { deleteUser, getUsers } from '../context/userContext/apiCalls';

const UserList = () => {
  const { users, dispatch } = useContext(UsersContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = id => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: params => {
        return (
          <div className='flex items-center'>
            <img
              className='w-8 h-8 rounded-full object-cover mr-3'
              src={
                params.row.profilePic ||
                'https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQbPHLHMADSYHIjUxUrTHwEeJXOX-rF9NpbKyfLmXJnukropAUAR-faZGpu9eIgjUKX5udaZMo6Wze-ifSqCOKW7CfizWSlYJg.png?r=eea'
              }
              alt=''
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'isAdmin',
      headerName: 'Admin',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='rounded-[10px] py-[5px] px-[10px] bg-[#3bb077] text-white cursor-pointer mr-5'>
                Edit
              </button>
            </Link>
            <DeleteOutline
              className='text-red-500 cursor-pointer'
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
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={r => r._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};
export default UserList;
