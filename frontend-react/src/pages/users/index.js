import { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateNewUser from "./create-new-user.js";
import TableForm from "tables/table";
import { getUsers } from "store/actions";
import request from "utils/request";
import ConfirmModal from "components/modal/ConfirmModal";
import toast from "utils/ToastNotistack";
import usePagination from "hooks/usePagination";
// import useAuth from "hooks/useAuth";

const Users = () => {
  const users = useSelector((state) => state.users);
  const { refreshPagination } = usePagination();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [rowData, setRowData] = useState(null);
  const [view, setView] = useState(false);
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  //   const { user } = useAuth();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { data, count } = useMemo(
    () => ({
      data: users.usersObject?.rows || [],
      count: users.usersObject?.count || 0,
      isLoading: users.loading || false,
    }),
    [users]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Mobile Number",
        accessor: "mobileNumber",
      },
      {
        Header: "Updated On",
        accessor: "updatedAt",
      },
      {
        Header: "Created On",
        accessor: "createdAt",
      },
    ],
    []
  );

  const onBack = () => {
    setView(false);
    setUpdate(false);
    setRowData(null);
    setShowAdd(!showAdd);
  };

  const handleRowDelete = (value) => {
    setDeleteId(value);
    setOpenDeleteModal(true);
  };

  const handleRowView = (row) => {
    setShowAdd(true);
    setView(true);
    setUpdate(false);
    setRowData(row);
  };

  const handleRowUpdate = (row) => {
    setShowAdd(true);
    setUpdate(true);
    setView(false);
    setRowData(row);
  };

  const confirmDelete = async () => {
    const response = await request(`/users/delete`, {
      method: "DELETE",
      params: `${deleteId}`,
    });
    if (response.success) {
      refreshPagination();
      setOpenDeleteModal(false);
    } else {
      toast(response?.error?.message);
    }
  };

  return (
    <>
      {showAdd ? (
        <CreateNewUser
          refreshPagination={refreshPagination}
          onClick={onBack}
          {...(rowData && { data: rowData })}
          {...(view && { view: view, update: false })}
          {...(update && { update: update, view: false })}
        />
      ) : (
        <TableForm
          title="User Creation"
          data={data}
          columns={columns}
          count={count}
          hideType
          hideImportButton={false}
          onClick={onBack}
          handleRowDelete={handleRowDelete}
          handleRowUpdate={handleRowUpdate}
          handleRowView={handleRowView}
          showLockIcon={true}
          // disableDeleteIcon={true}
        />
      )}
      <ConfirmModal
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
        handleConfirm={confirmDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete?"
        confirmBtnTitle="Delete"
      />
    </>
  );
};

export default Users;
