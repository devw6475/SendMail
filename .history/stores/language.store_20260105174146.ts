import { defineStore } from 'pinia';

export const useUserStore = defineStore('usersStore', {
  state: () => {
    return {
    
    }
  },
  persist: true,
  actions: {
    setUsers(users: ApiResponse<User>){
      this.users = users;
    },
    setUserModal(modal: boolean){
      this.addUserModal = modal;
    },
    setProviderId(id: string){
      this.providerId = id;
    },
    setPrestataire(prestataire: Prestataire){
      this.prestataire = prestataire;
    }

  },
})
