const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            demo: []
        },
        actions: {
            userExists: async () => {
                try {
                    const resp = await fetch("https://playground.4geeks.com/contact/agendas/cesar-amcolson", {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    if (resp.status === 404) {
                        return false;
                    }
                    return resp.ok;
                } catch (error) {
                    console.error("Error checking user existence:", error);
                    return false;
                }
            },
            createUser: async () => {
                try {
                    const resp = await fetch("https://playground.4geeks.com/contact/agendas/cesar-amcolson", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({})
                    });
                    if (!resp.ok) {
                        if (resp.status === 400) {
                            const errorData = await resp.json();
                            console.error("Error creating user:", errorData.detail);
                            return;
                        }
                        throw new Error(`error status: ${resp.status}`);
                    }
                } catch (error) {
                    console.error("Error creating user:", error);
                }
            },
            getContacts: async () => {
                const actions = getActions();
                try {
                    const exists = await actions.userExists();
                    if (!exists) {
                        await actions.createUser();
                    }
                    const resp = await fetch("https://playground.4geeks.com/contact/agendas/cesar-amcolson/contacts", {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    if (!resp.ok) {
                        throw new Error(`error status: ${resp.status}`);
                    }
                    let data = await resp.json();
                    console.log(data);
                    setStore({ contacts: data.contacts });
                    return getStore().contacts;
                } catch (error) {
                    console.error("Error getting contacts:", error);
                }
            },
            createContact: async (contact) => {
                try {
                    const resp = await fetch("https://playground.4geeks.com/contact/agendas/cesar-amcolson/contacts", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(contact)
                    });
                    if (!resp.ok) {
                        throw new Error(`error status: ${resp.status}`);
                    }
                    await getActions().getContacts();
                } catch (error) {
                    console.error("Error creating contact:", error);
                }
            },
            deleteContact: async (id) => {
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/cesar-amcolson/contacts/${id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    if (!resp.ok) {
                        throw new Error(`error status: ${resp.status}`);
                    }
                    await getActions().getContacts();
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            },
            updateContact: async (id, updatedContact) => {
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/cesar-amcolson/contacts/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (!resp.ok) {
                        throw new Error(`Error status: ${resp.status}`);
                    }
                    await getActions().getContacts();
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            }
        }
    };
};

export default getState;