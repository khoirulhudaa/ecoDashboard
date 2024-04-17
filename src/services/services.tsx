import api from './axios';

const API = {

    // Account user
    checkAccount: (body: any) => {
        return api.post('/account/signin', body)
    },
    createAccount: (body: any) => {
        return api.post('/account/signup', body)
    },
    getAllAccount: () => {
        return api.get('/account')
    },
    updateAccount: (user_id: string, body: any) => {
        console.log(user_id)
        console.log(body)
        return api.post(`/account/update/${user_id}`, body)
    },
    removeUser: (user_id: string) => {
        return api.post(`/account/delete/${user_id}`)
    },
    
    // Tour
    addTour: (body: any) => {
        return api.post('/tour', body)
    },
    getAllTour: () => {
        return api.get(`/tour`)
    },
    removeTour: (tour_id: string) => {
        return api.post(`/tour/remove/${tour_id}`)
    },
    updateTour: (tour_id: string, body: any) => {
        return api.post(`/tour/update/${tour_id}`, body)
    },

    // Spice
    addSpice: (body: any) => {
        return api.post('/spice', body)
    },
    getAlSpice: () => {
        return api.get(`/spice`)
    },
    removeSpice: (spice_id: string) => {
        return api.post(`/spice/remove/${spice_id}`)
    },
    updateSpice: (spice_id: string, body: any) => {
        return api.post(`/spice/update/${spice_id}`, body)
    },

    // Culinary
    addCulinary: (body: any) => {
        return api.post('/culinary', body)
    },
    getAlCulinary: () => {
        return api.get(`/culinary`)
    },
    removeCulinary: (culinary_id: string) => {
        return api.post(`/culinary/remove/${culinary_id}`)
    },
    updateCulinary: (culinary_id: string, body: any) => {
        console.log(culinary_id)
        console.log(body)
        return api.post(`/culinary/update/${culinary_id}`, body)
    },

    // Contact
    addContact: (body: any) => {
        return api.post('/contact', body)
    },
    getAlContact: () => {
        return api.get(`/contact`)
    },
    removeContact: (contact_id: string) => {
        return api.post(`/contact/remove/${contact_id}`)
    },
    updateContact: (contact_id: string, body: any) => {
        return api.post(`/contact/update/${contact_id}`, body)
    },
    
    // Island
    addIsland: (body: any) => {
        return api.post('/island', body)
    },
    getAllIsland: () => {
        return api.get(`/island`)
    },
    removeIsland: (island_id: string) => {
        return api.post(`/island/remove/${island_id}`)
    },
    updateIsland: (island_id: string, body: any) => {
        return api.post(`/island/update/${island_id}`, body)
    },
    
    // Article
    addArticle: (body: any) => {
        return api.post('/article', body)
    },
    getAllArticle: () => {
        return api.get(`/article`)
    },
    removeArticle: (article_id: string) => {
        return api.post(`/article/remove/${article_id}`)
    },
    updateArticle: (article_id: string, body: any) => {
        return api.post(`/article/update/${article_id}`, body)
    },
  
    // Event
    addEvent: (body: any) => {
        return api.post('/event', body)
    },
    getEvent: () => {
        return api.get(`/event`)
    },
    removeEvent: (event_id: string) => {
        return api.post(`/event/remove/${event_id}`)
    },
    updateEvent: (event_id: string, body: any) => {
        console.log(event_id)
        return api.post(`/event/update/${event_id}`, body)
    },

    // Email
    addMessageEmail: (body: any) => {
        return api.post('/email', body)
    },
    getAllEmail: () => {
        return api.get('/email')
    },
    removeEmail: (email_id: string) => {
        return api.post(`/email/remove/${email_id}`)
    },

    

}

export default API;