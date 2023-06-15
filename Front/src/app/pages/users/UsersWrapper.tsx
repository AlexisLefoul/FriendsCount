import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {KTSVG} from '../../../_metronic/helpers/components/KTSVG'
import {useState, useEffect, ChangeEvent, FormEvent} from 'react'

import API from '../../../api'

const UsersPage: FC = () => {
  const [user, setUser] = useState({nom: '', prenom: ''})
  const [refresh, setRefresh] = useState(false)
  const [users, setUsers] = useState<any[]>([])
  const [modalVisible, setModalVisible] = useState(false)

  async function getUsers() {
    const response = await API.get('users')
    setUsers(response.data)
    setRefresh(false)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.id === 'nom') {
      setUser({
        nom: event.target.value,
        prenom: user.prenom,
      })
    }
    if (event.target.id === 'prenom') {
      setUser({
        nom: user.nom,
        prenom: event.target.value,
      })
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      // Effectuer l'appel POST à votre API
      await API.post('user/add', user)

      // Réinitialiser les valeurs du formulaire
      setUser({nom: '', prenom: ''})

      // Fermer la modal en mettant à jour l'état modalOpen
      setModalVisible(false)

      // Déclencher le rafraîchissement de la liste des utilisateurs
      setRefresh(true)
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur:", error)
    }
  }

  function handleModalClose() {
    setModalVisible(false)
    setRefresh(true)
    window.location.reload();
  }

  useEffect(() => {
    getUsers()
  }, [refresh])

  return (
    <>
      <div>
        <button
          type='button'
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#kt_modal_1'
          onClick={() => setModalVisible(true)}
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
            {users?.map((uti) => (
              <>
                <tr key={uti.id}>
                  <td>{uti.nom}</td>
                  <td>{uti.prenom}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className='modal fade'
        tabIndex={-1}
        id='kt_modal_1'
        style={{display: modalVisible ? 'block' : 'none'}}
      >
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
            <form onSubmit={handleSubmit}>
              <div className='modal-body'>
                <div className='mb-10'>
                  <label className='form-label'>Nom</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Nom'
                    name='nom'
                    id='nom'
                    value={user.nom}
                    onChange={handleChange}
                  />
                </div>
                <div className='mb-10'>
                  <label className='form-label'>Prénom</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Prénom'
                    name='prenom'
                    id='prenom'
                    value={user.prenom}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                  Annuler
                </button>
                <button type='submit' className='btn btn-primary' onClick={handleModalClose}>
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

const UsersWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Utilisateurs</PageTitle>
      <UsersPage />
    </>
  )
}

export {UsersWrapper}
