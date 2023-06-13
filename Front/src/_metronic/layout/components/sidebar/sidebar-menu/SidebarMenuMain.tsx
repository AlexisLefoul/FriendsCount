/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {

  return (
    <>
      <SidebarMenuItem
        to='/depenses'
        icon='/media/icons/duotune/ecommerce/ecm008.svg'
        title='Dépenses'
        fontIcon='bi-card-list'
      />
      <SidebarMenuItem
        to='/balance'
        icon='/media/icons/duotune/finance/fin001.svg'
        title='Balance'
        fontIcon='bi-bank'
      />
      <SidebarMenuItem
        to='/users'
        icon='/media/icons/duotune/communication/com014.svg'
        title='Utilisateurs'
        fontIcon='bi-people'
      />
    </>
  )
}

export {SidebarMenuMain}
