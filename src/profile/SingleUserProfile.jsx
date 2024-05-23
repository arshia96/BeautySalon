import React, { useState } from 'react'
import ColTable from '../../ui/ColTable';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Loading from '../../ui/Loading';
import Modal from '../../ui/Modal';
import { Link, useNavigate } from 'react-router-dom';
import toLocalDateShort from '../../utils/toLocalDateShort';
import { toPersianNumbers } from '../../utils/toPersianNumbers';
import { HiArrowRight, HiOutlineTrash } from 'react-icons/hi';
import useRemoveUser from '../authentication/useRemoveUser';
import useUser from '../authentication/useUser';
import PageHeader from '../../ui/PageHeader';

const statusStyle = [
    {
        label: "رد شده", 
        className: "badge--danger"
    },
    {
        label: "در انتظار تایید", 
        className: "badge--secondary"
    },
    {
        label: "تایید شده", 
        className: "badge--success"
    }
]
function SingleUserProfile({ user }) {
    const navigate = useNavigate();
    const { isLoading, user:currentUser } = useUser();
    const { isDeleting, removeUser } = useRemoveUser();
    const [ deleteOpen, setDeleteOpen ] = useState(false);
    const { _id, name, email, phoneNumber, createdAt, status, role, biography } = user;
  return (
    <div>
        <div className='flex items-center gap-x-4 mb-8 justify-between w-11/12'>
          <PageHeader headerTitle={`کاربر ${name}`} />
          {isLoading ? <Loading /> : currentUser.role === "ADMIN" ? (
            <div className='flex items-center h-5'>
            <Modal 
                open={deleteOpen} 
                onClose={() => setDeleteOpen(false)} 
                title={`حذف کاربر`} 
            >
                {isDeleting ? (
                <Loading />
                ) : (
                    <ConfirmDelete
                        resourceName={name ? name : "کاربر"} 
                        onClose={() => setDeleteOpen(false)} 
                        onConfirm={() => removeUser(_id, { 
                            onSuccess: () => {
                                setDeleteOpen(false);
                                navigate(-1);
                            }
                        })} 
                        disabled={false} 
                    />
                )}
            </Modal> 
                <button onClick={() => setDeleteOpen(true)} className='btn btn--danger flex align-middle gap-x-1 p-2'>
                    <HiOutlineTrash className='hi-icon text-rose-700' />حذف کاربر
                </button>
            </div>
            ) : ""}
        </div>
        <ColTable>
            <ColTable.Row>
                <ColTable.Header>
                    <h3 className="font-black text-secondary-900">نام و نام خانوادگی:</h3>
                </ColTable.Header>
                <ColTable.Body>
                    <p className="text-secondary-700">{name}</p>
                </ColTable.Body>
            </ColTable.Row>

            <ColTable.Row>
                <ColTable.Header>
                    <h3 className="font-black text-secondary-900">ایمیل:</h3>
                </ColTable.Header>
                <ColTable.Body>
                    <p className="text-secondary-700">{<Link to={`mailto:${email}`}>{email}</Link>}</p>
                </ColTable.Body>
            </ColTable.Row>

            <ColTable.Row>
                <ColTable.Header>
                    <h3 className="font-black text-secondary-900">شماره تماس:</h3>
                </ColTable.Header>
                <ColTable.Body>
                    <p className="text-secondary-700">{<Link to={`tel:${phoneNumber}`}>{toPersianNumbers(phoneNumber)}</Link>}</p>
                </ColTable.Body>
            </ColTable.Row>

            <ColTable.Row className='align-middle items-center'>
                <ColTable.Header>
                    <h3 className="font-black text-secondary-900">وضعیت حساب کاربری:</h3>
                </ColTable.Header>
                <ColTable.Body>
                    <span className={`badge ${statusStyle[status].className}`}>
                        {statusStyle[status].label}
                    </span>
                </ColTable.Body>
            </ColTable.Row>

            <ColTable.Row>
                <ColTable.Header>
                    <h3 className="font-black text-secondary-900">نقش:</h3>
                </ColTable.Header>
                <ColTable.Body>
                    <p className="text-secondary-700">{role}</p>
                </ColTable.Body>
            </ColTable.Row>

            <ColTable.Row>
                <ColTable.Header>
                    <h3 className="font-black text-secondary-900">عضویت در تاریخ:</h3>            
                </ColTable.Header>
                <ColTable.Body>
                    <p className="text-secondary-700">{toLocalDateShort(createdAt)}</p>
                </ColTable.Body>
            </ColTable.Row>

            <ColTable.Row className={biography ? "h-56" : ""}>
                <ColTable.Header>
                    <h3 className="font-black text-secondary-900">بیوگرافی:</h3>
                </ColTable.Header>
                <ColTable.Body className="whitespace-break-spaces">
                    <p className="text-secondary-700">{biography ? biography : " - "}</p>
                </ColTable.Body>
            </ColTable.Row>
        </ColTable>
    </div>
  )
}

export default SingleUserProfile;