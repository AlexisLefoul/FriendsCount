/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {useState, useEffect, ChangeEvent, FormEvent} from 'react'
import API from '../../../api'

const DepensesPage: FC = () => {
  const [categ, setCateg] = useState({nom: ''})
  const [depense, setDepense] = useState({user: '', categ: '', montant: ''})
  const [refresh, setRefresh] = useState(false)
  const [depenses, setDepenses] = useState<any[]>([])
  const [categs, setCategs] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [modalVisible, setModalVisible] = useState(false)

  async function getDepenses() {
    const response = await API.get('depenses')
    setDepenses(response.data)
    setRefresh(false)
  }

  async function getCategs() {
    const response = await API.get('categs')
    setCategs(response.data)
    setRefresh(false)
  }

  async function getUsers() {
    const response = await API.get('users')
    setUsers(response.data)
    setRefresh(false)
  }

  function handleChangeDepense(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    if (event.target.id === 'user') {
      setDepense({
        user: event.target.value,
        categ: depense.categ,
        montant: depense.montant,
      })
    }
    if (event.target.id === 'categ') {
      setDepense({
        user: depense.user,
        categ: event.target.value,
        montant: depense.montant,
      })
    }
    if (event.target.id === 'montant') {
      setDepense({
        user: depense.user,
        categ: depense.categ,
        montant: event.target.value,
      })
    }
  }

  async function handleSubmitDepense(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      console.log(depense)
      if (depense.categ.length === 0 || depense.user.length === 0 || depense.montant.length === 0) {
        // Redirection vers la page d'erreur après 3 secondes
        setTimeout(() => {
          window.location.href = 'friendscount/error/404'
        }, 1000) // 1000 millisecondes = 1 secondes
      } else {
        // Effectuer l'appel POST à votre API
        await API.post('depense/add', depense)

        // Fermer la modal en mettant à jour l'état modalOpen
        handleModalClose()
      }
      // Réinitialiser les valeurs du formulaire
      setDepense({user: '', categ: '', montant: ''})
    } catch (error) {
      console.error("Erreur lors de la création d'une dépénse:", error)
    }
  }

  function handleChangeCateg(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.id === 'nom') {
      setCateg({
        nom: event.target.value,
      })
    }
  }

  async function handleSubmitCateg(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      // Effectuer l'appel POST à votre API
      await API.post('categ/add', categ)

      // Réinitialiser les valeurs du formulaire
      setCateg({nom: ''})

      // Fermer la modal en mettant à jour l'état modalOpen
      handleModalClose()
    } catch (error) {
      console.error("Erreur lors de la création d'une catégorie:", error)
    }
  }

  function handleModalClose() {
    setModalVisible(false)
    setRefresh(true)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  useEffect(() => {
    getDepenses()
    getCategs()
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
          Ajouter une dépense
        </button>
        <button
          type='button'
          className='btn btn-info fs-8'
          data-bs-toggle='modal'
          data-bs-target='#kt_modal_2'
        >
          Ajouter une catégorie de dépense
        </button>
      </div>
      <div className='table-responsive'>
        <table className='table table-striped gy-7 gs-7'>
          <thead>
            <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
              <th className='min-w-300px'>Nom</th>
              <th className='min-w-300px'>Prénom</th>
              <th className='min-w-300px'>Catégorie</th>
              <th className='min-w-300px'>Montant</th>
              <th className='min-w-300px'>Date</th>
            </tr>
          </thead>
          <tbody>
            {depenses?.map((dep) => (
              <>
                <tr key={dep.id}>
                  <td>{dep.user.nom}</td>
                  <td>{dep.user.prenom}</td>
                  <td>{dep.categ.nom}</td>
                  <td>{dep.montant} €</td>
                  <td>{dep.date}</td>
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
            <form onSubmit={handleSubmitDepense}>
              <div className='modal-body'>
                <select
                  className='form-select mb-10'
                  aria-label='Sélectionnez un utilisateur'
                  id='user'
                  value={depense.user}
                  onChange={handleChangeDepense}
                >
                  {users?.map((uti) => (
                    <>
                      <option value={uti.id} key={uti.id}>
                        {uti.nom} {uti.prenom}
                      </option>
                    </>
                  ))}
                </select>
                <select
                  className='form-select mb-10'
                  aria-label='Sélectionnez une catégorie'
                  id='categ'
                  value={depense.categ}
                  onChange={handleChangeDepense}
                >
                  {categs?.map((cat) => (
                    <>
                      <option value={cat.id} key={cat.id}>
                        {cat.nom}
                      </option>
                    </>
                  ))}
                </select>
                <div className='input-group mb-10'>
                  <input
                    type='number'
                    className='form-control'
                    id='montant'
                    value={depense.montant}
                    onChange={handleChangeDepense}
                  />
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

      <div
        className='modal fade'
        tabIndex={-1}
        id='kt_modal_2'
        style={{display: modalVisible ? 'block' : 'none'}}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Ajout d'une catégorie de dépense</h5>
              <div
                className='btn btn-icon btn-sm btn-active-light-info ms-2'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <KTSVG
                  path='/media/icons/duotune/arrows/arr061.svg'
                  className='svg-icon svg-icon-2x'
                />
              </div>
            </div>
            <form onSubmit={handleSubmitCateg}>
              <div className='modal-body'>
                <div className='mb-10'>
                  <label className='form-label'>Nom</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Nom'
                    name='nom'
                    id='nom'
                    value={categ.nom}
                    onChange={handleChangeCateg}
                  />
                </div>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                  Annuler
                </button>
                <button type='submit' className='btn btn-info'>
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

const DepensesWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Dépenses</PageTitle>
      <DepensesPage />
    </>
  )
}

export {DepensesWrapper}
