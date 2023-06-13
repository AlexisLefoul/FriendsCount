/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {KTSVG} from '../../../_metronic/helpers/components/KTSVG'

const UsersPage: FC = () => (
  <>
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_1'
      >
        Ajouter un utilisateur
      </button>
    </div>
    <div className='table-responsive'>
      <table className='table table-striped gy-7 gs-7'>
        <thead>
          <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
            <th className='min-w-200px'>Nom</th>
            <th className='min-w-400px'>Prénom</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger</td>
            <td>System</td>
          </tr>
          <tr>
            <td>Garrett</td>
            <td>Accountant</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className='modal fade' tabIndex={-1} id='kt_modal_1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Ajout d'un utilisateur</h5>
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
              <div className='mb-10'>
                <label className='form-label'>Nom</label>
                <input type='text' className='form-control' placeholder='Nom' />
              </div>
              <div className='mb-10'>
                <label className='form-label'>Prénom</label>
                <input type='text' className='form-control' placeholder='Prénom' />
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

const UsersWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Utilisateurs</PageTitle>
      <UsersPage />
    </>
  )
}

export {UsersWrapper}
