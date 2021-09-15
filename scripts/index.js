import 'regenerator-runtime/runtime'
import { querySelectElement } from './domMethods'
import { getListOfUsers } from './apiFunctions'
import { closeModal, populateModal} from './modalFunctions'

const closeModalButton = querySelectElement('.close')
closeModalButton.addEventListener('click', closeModal)

//const updateRecordButton = 
getListOfUsers()

