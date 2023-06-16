/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {useState, useEffect} from 'react'
import API from '../../../api'

const BalancePage: FC = () => {
  const [depenses, setDepenses] = useState<any[]>([])
  const [refresh, setRefresh] = useState(false)

  async function getDepenses() {
    const response = await API.get('depenses')
    setDepenses(response.data)
    setRefresh(false)
  }

  useEffect(() => {
    getDepenses()
  }, [refresh])

  return (
    <>
      <div className='col-xxl-12 d-flex flex-column gap-10'>
        {depenses?.map((dep) => (
          <>
            <div className='d-flex flex-row' key={dep.id}>
              <div className='col-5'>
                <span>
                  {dep.user.nom} {dep.user.prenom}
                </span>
              </div>
              <div className='progress col-5' style={{height: '30px'}}>
                <div
                  className={`progress-bar progress-bar-striped fs-4 ${
                    dep.montant > 0 ? 'bg-success' : 'bg-danger'
                  }`}
                  role='progressbar'
                  style={{width: (dep.montant > 100 ? '100' : dep.montant) + '%'}}
                  aria-valuenow={dep.montant}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {dep.montant > 0 ? '+' : '-'} {dep.montant} €
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

const BalanceWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Balance</PageTitle>
      <BalancePage />
    </>
  )
}

export {BalanceWrapper}
