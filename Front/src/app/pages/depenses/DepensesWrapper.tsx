/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'

const DepensesPage: FC = () => (
  <>
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_1'
      >
        Ajouter une dépense
      </button>
    </div>
    <div className='table-responsive'>
      <table className='table table-striped gy-7 gs-7'>
        <thead>
          <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
            <th className='min-w-300px'>Nom</th>
            <th className='min-w-300px'>Prénom</th>
            <th className='min-w-300px'>Montant</th>
            <th className='min-w-300px'>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger</td>
            <td>System</td>
            <td>30€</td>
            <td>10/12/2020</td>
          </tr>
          <tr>
            <td>Garrett</td>
            <td>Accountant</td>
            <td>10€</td>
            <td>01/03/2019</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className='modal fade' tabIndex={-1} id='kt_modal_1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Ajout d'une dépense</h5>
            <div
              className='btn btn-icon btn-sm btn-active-light-primary ms-2'
              data-bs-dismiss='modal'
              aria-label='Close'
            >
              <KTSVG
                path='/media/icons/duotune/arrows/arr061.svg'
                className='svg-icon svg-icon-2x'
              />
            </div>
          </div>
          <form>
            <div className='modal-body'>
              <select className='form-select mb-10' aria-label='Select example'>
                <option value='id_User'>Tiger System</option>
                <option value='id_User'>Garrett Accountant</option>
              </select>
              <div className='input-group mb-10'>
                <input type='text' className='form-control' />
                <span className='input-group-text'>€</span>
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                Annuler
              </button>
              <button type='submit' className='btn btn-primary'>
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
)

const DepensesWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Dépenses</PageTitle>
      <DepensesPage />
    </>
  )
}

export {DepensesWrapper}
