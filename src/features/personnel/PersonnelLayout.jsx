import React from 'react'
import AppLayout from '../../ui/AppLayout'
import CustomNavLink from '../../ui/CustomNavLink'
import Sidebar from '../../ui/Sidebar'
import { HiCollection, HiHome, HiOutlineTicket, HiUser, HiViewGrid } from 'react-icons/hi'

function PersonnelLayout() {
  return (
    <AppLayout>
        <Sidebar>
            <CustomNavLink to="dashboard">
                <HiHome />
                <span>داشبورد</span>
            </CustomNavLink>

            <CustomNavLink to="portfolios">
                <HiViewGrid />
                <span>نمونه کار های ما</span>
            </CustomNavLink>

            <CustomNavLink to="appointments">
                <HiCollection />
                <span>نوبت های من</span>
            </CustomNavLink>

            <CustomNavLink to="reserv-time">
                <HiOutlineTicket />
                <span>رزرو نوبت جدید</span>
            </CustomNavLink>

            <CustomNavLink to="profile">
                <HiUser />
                <span>پروفایل</span>
            </CustomNavLink>
        </Sidebar>
    </AppLayout>
  )
}

export default PersonnelLayout