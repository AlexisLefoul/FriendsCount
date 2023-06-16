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
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  function deleteUserModal(event: React.MouseEvent<HTMLButtonElement>) {
    const userId = event.currentTarget.getAttribute('data-bs-user')
    const userIdInput = document.getElementById('user-id-input') as HTMLInputElement

    if (userIdInput && userId !== null) {
      userIdInput.value = userId
    }
  }

  function deleteUser() {
    const userIdInput = document.getElementById('user-id-input') as HTMLInputElement
    if (userIdInput) {
      const userId = userIdInput.value
      // Utilisez l'ID de l'utilisateur pour effectuer les actions nécessaires
      API.delete('user/' + userId)

      setRefresh(true)
      setTimeout(() => {
        window.location.reload()
      }, 800)
    }
  }

  useEffect(() => {
    getUsers()
  }, [refresh])

  return (
    <>
      <div className='d-flex flex-row justify-content-between'>
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
              <th className='min-w-300px'>Nom</th>
              <th className='min-w-300px'>Prénom</th>
              <th className='min-w-100px'></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((uti) => (
              <>
                <tr key={uti.id}>
                  <td>{uti.nom}</td>
                  <td>{uti.prenom}</td>
                  <td>
                    <button
                      type='button'
                      className='btn btn-danger'
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_2'
                      data-bs-user={uti.id}
                      onClick={deleteUserModal}
                    >
                      Supprimer
                    </button>
                  </td>
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
                <button
                  type='button'
                  className='btn btn-active-light-primary'
                  data-bs-dismiss='modal'
                >
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

      <div className='modal fade' tabIndex={-1} id='kt_modal_2'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Suppression d'un utilisateur</h5>
              <div
                className='btn btn-icon btn-sm btn-active-light-danger ms-2'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <KTSVG
                  path='/media/icons/duotune/arrows/arr061.svg'
                  className='svg-icon svg-icon-2x'
                />
              </div>
            </div>
            <div className='modal-body'>
              <h3>Etes-vous sûr de vouloir supprimer cet utilisateur ?</h3>
              <input type='hidden' id='user-id-input' value='' />
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-active-light-danger' data-bs-dismiss='modal'>
                Annuler
              </button>
              <button type='submit' className='btn btn-danger' onClick={deleteUser}>
                Supprimer
              </button>
            </div>
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
