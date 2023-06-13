/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'

const BalancePage: FC = () => (
  <>
    <div className='col-xxl-12 d-flex flex-column gap-10'>
      <div className='d-flex flex-row'>
        <div className='col-5'>
          <span>Tiger System</span>
        </div>
        <div className='progress col-5' style={{height: '30px'}}>
          <div
            className='progress-bar progress-bar-striped bg-success fs-4'
            role='progressbar'
            style={{width: '25%'}}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            +25€
          </div>
        </div>
      </div>
      <div className='d-flex flex-row'>
        <div className='col-5'>
          <span>Garrett Accountant</span>
        </div>
        <div className='progress col-5' style={{height: '30px'}}>
          <div
            className='progress-bar progress-bar-striped bg-danger fs-4'
            role='progressbar'
            style={{width: '25%'}}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            -25€
          </div>
        </div>
      </div>
    </div>
  </>
)

const BalanceWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Balance</PageTitle>
      <BalancePage />
    </>
  )
}

export {BalanceWrapper}
